import ScrollMotion from "./components/ScrollMotion";
import Home from "./components/Sections/Home";
import About from "./components/Sections/About";
import Skills from "./components/Sections/Skills";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";

export default function Page() {
  return (
    <ScrollMotion className="frame">
      <Home />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </ScrollMotion>
  );
}