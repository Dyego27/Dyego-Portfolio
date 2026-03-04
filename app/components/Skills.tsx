"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Prisma", icon: SiPrisma, color: "#8B5CF6" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
];

const softSkills = [
  "Proactive",
  "Teamwork",
  "Problem Solving",
  "Communication",
  "Adaptability",
];

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-[#050816] py-28 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
          TECHNICAL SKILLS
        </h2>

        <p className="text-gray-400 mt-3 mb-16">
          Technologies I work with to build amazing web experiences
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-105"
                style={{
                  boxShadow: "0 0 0 transparent",
                }}
                whileHover={{
                  boxShadow: `0 0 40px ${skill.color}40`,
                  borderColor: skill.color,
                }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Icon size={45} color={skill.color} />
                </motion.div>

                <span className="mt-6 text-white font-medium">
                  {skill.name}
                </span>

                <div
                  className="h-[3px] w-16 mt-4 rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20">
          <h3 className="text-xl font-semibold text-white mb-8">Soft Skills</h3>

          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-white/30 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
