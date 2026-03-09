"use client";

import { GithubLogo, LinkedinLogo, EnvelopeSimple } from "phosphor-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#070816] py-6 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* LEFT */}
        <p className="text-sm text-gray-400">
          © 2025 Dyego Luis. Crafted with{" "}
          <span className="text-cyan-400">React</span> &{" "}
          <span className="text-purple-400">Framer Motion</span>
        </p>

        {/* CENTER ICONS */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Dyego27"
            target="_blank"
            className="text-gray-400 transition-all duration-300 hover:text-cyan-400 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          >
            <GithubLogo size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/dyego-luis-252244354/"
            target="_blank"
            className="text-gray-400 transition-all duration-300 hover:text-cyan-400 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          >
            <LinkedinLogo size={22} />
          </a>

          <a
            href="mailto:dyegoluis123@gmail.com"
            className="text-gray-400 transition-all duration-300 hover:text-cyan-400 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          >
            <EnvelopeSimple size={22} />
          </a>
        </div>

        {/* RIGHT */}
        <p className="text-sm text-gray-500">
          Designed & Developed by{" "}
          <span className="text-cyan-400 hover:text-purple-400 transition-colors">
            Dyego Luis
          </span>
        </p>
      </div>
    </footer>
  );
}
