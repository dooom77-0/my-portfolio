import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center" >
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
}
