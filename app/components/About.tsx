"use client";

import { motion } from "framer-motion";
import { GraduationCap, Globe } from "phosphor-react";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#050816] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm tracking-widest text-cyan-400 uppercase">
                About Me
              </span>

              {/* Gradient Bar */}
              <div className="h-[2px] w-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Building digital
              <br />
              experiences with
              <br />
              modern technologies
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300 text-base sm:text-lg"
          >
            <p>
              I'm Dyego Luis Mendonça de Lima, a Computer Science student with a
              passion for front-end development. I specialize in creating
              beautiful, responsive, and user-friendly web applications using
              the latest technologies.
            </p>

            <p>
              My journey in web development has been driven by curiosity and a
              desire to build solutions that make a difference. I'm constantly
              learning and exploring new technologies to stay at the forefront
              of modern web development.
            </p>

            <p>
              With strong skills in React, Next.js, TypeScript, and modern CSS
              frameworks, I bring ideas to life through clean code and
              thoughtful design. I'm proactive, enjoy teamwork, and always
              strive for excellence.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-cyan-400/40 transition-all duration-300">
                <GraduationCap size={26} className="text-cyan-400 mb-4" />
                <h4 className="text-white font-semibold mb-2">Education</h4>
                <p className="text-gray-400 text-sm">
                  Licenciatura em Ciência da Computação
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-purple-400/40 transition-all duration-300">
                <Globe size={26} className="text-purple-400 mb-4" />
                <h4 className="text-white font-semibold mb-2">Languages</h4>
                <p className="text-gray-400 text-sm">English Course - CCAE</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
