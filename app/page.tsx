import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  );
}
