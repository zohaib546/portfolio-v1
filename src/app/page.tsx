import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollCue from "@/components/scroll-cue";
import Hero from "./sections/hero";
import TechStack from "./sections/tech-stack";
import Testimonials from "./sections/testimonials";
import AiAugmented from "./sections/ai-augmented";
import Experience from "./sections/experience";
import Projects from "./sections/projects";
import HomeMain from "./sections/home-main";

export default function HomePage() {
  return (
    <div className="home__outer flex h-full w-full items-center justify-center">
      <div className="home__inner">
        <Header />
        <HomeMain>
          <Hero />
          <TechStack />
          <AiAugmented />
          <Projects />
          <Experience />
          <Testimonials />
          <Footer />
        </HomeMain>
      </div>
    </div>
  );
}
