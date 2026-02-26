"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#09090E]">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-6">
        {/* Grid Layout */}
        <div className="grid min-h-screen items-center gap-12 lg:grid-cols-2">
          {/* Left Side - Content */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Dyego Luis Mendonça
            </h1>

            <h2 className="text-xl text-gray-400 sm:text-2xl">
              Computer Science Student
            </h2>

            <p className="max-w-xl text-gray-500">
              Passionate about building modern, beautiful and functional web
              interfaces with clean architecture and scalable solutions.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <button className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:opacity-90">
                View Projects
              </button>

              <button className="rounded-lg border border-gray-700 px-6 py-3 font-medium text-white transition hover:bg-gray-800">
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Side - Floating Card Placeholder */}
          <div className="flex items-center justify-center">
            <div className="h-64 w-64 rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
