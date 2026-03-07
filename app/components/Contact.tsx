"use client";

import { useEffect, useRef, useState } from "react";
import {
  EnvelopeSimple,
  LinkedinLogo,
  GithubLogo,
  PaperPlaneTilt,
} from "phosphor-react";

export default function Contact() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const contacts = [
    {
      icon: EnvelopeSimple,
      title: "Email",
      value: "dyegoluis123@gmail.com",
      link: "mailto:dyegoluis123@gmail.com",
    },
    {
      icon: LinkedinLogo,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/dyego-luis-252244354/",
    },
    {
      icon: GithubLogo,
      title: "GitHub",
      value: "@Dyego27",
      link: "https://github.com/Dyego27",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="w-full bg-[#070816] text-white py-28 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-6
          chroma-text
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          LET'S CONNECT
        </h2>

        {/* TEXT */}
        <p
          className={`text-gray-400 max-w-xl mx-auto mb-16
          transition-all duration-700 delay-200
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contacts.map((item, i) => {
            const Icon = item.icon;

            return (
              <a
                key={i}
                href={item.link}
                target="_blank"
                className={`group bg-[#0f0f1a] border border-white/10 rounded-xl p-8
                transition-all duration-300
                hover:-translate-y-2 hover:scale-105
                hover:border-purple-500/30
                flex flex-col items-center gap-3

                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${400 + i * 200}ms` }}
              >
                <Icon
                  size={36}
                  className="
                  text-gray-300
                  transition-all duration-300
                  group-hover:scale-125
                  group-hover:text-cyan-400
                  group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]
                  "
                />

                <span className="text-gray-400 text-sm">{item.title}</span>

                <span
                  className="
                  font-semibold
                  transition-all duration-300
                  group-hover:text-transparent
                  group-hover:bg-gradient-to-r
                  group-hover:from-purple-400
                  group-hover:via-cyan-400
                  group-hover:to-pink-400
                  group-hover:bg-clip-text
                  "
                >
                  {item.value}
                </span>
              </a>
            );
          })}
        </div>

        {/* TEXT */}
        <p
          className={`text-gray-500 mb-8
          transition-all duration-700 delay-[900ms]
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Looking for a dedicated front-end developer for your next project?
        </p>

        <a
          href="#"
          className={`inline-flex items-center gap-2 px-8 py-4 rounded-full
          bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500
          transition-all duration-300
          hover:scale-105
          hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]

          ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "1100ms" }}
        >
          <PaperPlaneTilt size={20} />
          Send me a message
        </a>
      </div>
    </section>
  );
}
