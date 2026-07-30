import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "./sections/hero";
import TechStack from "./sections/tech-stack";
import Testimonials from "./sections/testimonials";
import AiAugmented from "./sections/ai-augmented";
import Experience from "./sections/experience";
import Projects from "./sections/projects";

export default function HomePage() {
  return (
    <div className="home__inner">
      <Header />
      <main className="home__main">
        <Hero />
        <TechStack />
        <AiAugmented />
        <Projects />
        <Experience />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}
