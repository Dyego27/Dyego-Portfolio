import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
