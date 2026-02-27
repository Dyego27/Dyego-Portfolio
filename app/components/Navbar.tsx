"use client";

import { useState, useEffect } from "react";
import { List, X } from "phosphor-react";

const links = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#070816]/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-lg font-semibold bg-gradient-to-r from-[#32C5EF] via-[#6496F3] to-[#9666F6] bg-clip-text text-transparent">
          Dyego
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-[13px] font-medium tracking-wide">
          {links.map((link) => (
            <li key={link} className="relative group cursor-pointer">
              <span className="text-gray-400 group-hover:text-white transition duration-300">
                {link}
              </span>

              <span
                className="
                  absolute left-1/2 -translate-x-1/2 bottom-[-6px]
                  h-[2px] w-0
                  bg-gradient-to-r from-[#32C5EF] via-[#6496F3] to-[#9666F6]
                  rounded-full
                  transition-all duration-300
                  group-hover:w-5
                "
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={26} /> : <List size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 bg-[#070816]/95 backdrop-blur-xl text-sm">
          {links.map((link) => (
            <li
              key={link}
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition duration-300"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
