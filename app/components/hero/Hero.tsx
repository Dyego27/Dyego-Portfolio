"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#070816] px-6 md:px-20 py-20 md:py-0 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] text-cyan-400 uppercase"
          >
            Computer Science Student
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-4 text-5xl md:text-7xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Dyego Luis
            </span>
            <br />
            <span className="text-white">Mendonça</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-6 text-gray-400 text-lg leading-relaxed"
          >
            Front-end developer passionate about creating beautiful, functional,
            and user-friendly web experiences with modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex gap-4"
          >
            <Link
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-medium hover:scale-105 transition duration-300"
            >
              View Projects
            </Link>

            <Link
              href="#contact"
              className="px-6 py-3 rounded-full border border-gray-600 text-white hover:bg-white hover:text-black transition duration-300"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] flex items-center justify-center mt-16 md:mt-0">
          <motion.div
            animate={{ rotate: [0, 6, -6, 0] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-72 h-72 rounded-3xl bg-gradient-to-br from-purple-600/30 to-purple-800/20 backdrop-blur-xl border border-purple-500/20"
          />

          <motion.div
            animate={{ rotate: [0, -8, 8, 0] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-64 h-64 rounded-3xl bg-gradient-to-br from-cyan-500/30 to-purple-600/20 backdrop-blur-xl border border-cyan-400/20"
          />

          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-56 h-56 rounded-3xl bg-gradient-to-br from-purple-500/40 to-cyan-500/30 backdrop-blur-xl border border-white/10"
          />
        </div>
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-700/20 blur-[140px] rounded-full" />
    </section>
  );
}
