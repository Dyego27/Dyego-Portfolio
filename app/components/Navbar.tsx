"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["About", "Skills", "Projects", "Certificates", "Contact"];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <h1 className="text-lg font-bold tracking-wide text-white">
            Dyego.dev
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-sm text-gray-300">
            {links.map((link) => (
              <li
                key={link}
                className="relative group cursor-pointer text-gray-400 transition duration-300"
              >
                <span className="group-hover:text-white transition duration-300">
                  {link}
                </span>

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#32C5EF] via-[#6496F3] to-[#9666F6] transition-all duration-500 group-hover:w-full rounded-full"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-[#070816]/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 text-white text-xl z-40"
          >
            {links.map((link) => (
              <div
                key={link}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-[#32C5EF] transition"
              >
                {link}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
