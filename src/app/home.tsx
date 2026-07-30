import Header from "@/components/header";
import Footer from "../components/footer";
import Hero from "./sections/hero";
import TechStack from "./sections/tech-stack";
import Testimonials from "./sections/testimonials";
import AiAugmented from "./sections/ai-augmented";

const Home = () => {
  return (
    <div className="home__inner">
      <Header />
      <main className="home__main">
        <Hero />
        <TechStack />
        <AiAugmented />
        <section>
          <div className="flex justify-between">
            <div>
              <p className="subtitle">Selected work</p>
              <h3>Featured projects</h3>
            </div>
            <div>
              <p className="text-[#5e5e5e]">Problem → Solution → Impact</p>
            </div>
          </div>
        </section>
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
