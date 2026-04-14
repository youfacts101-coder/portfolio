import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full bg-black text-white overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
