import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <Research />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
