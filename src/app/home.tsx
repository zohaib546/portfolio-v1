"use client";
import Chip from "@/components/chip/chip";
import StatsCard from "@/components/cards/stats/stats";
import Button from "@/components/button/button";
import Header from "@/components/header/header";
import { LuDownload } from "react-icons/lu";
import Footer from "./../components/footer/footer";

const Home = () => {
  return (
    <div className="home__inner">
      <Header />
      <main className="home__main">
        <section className="flex justify-between gap-5">
          <div className="flex flex-col gap-6">
            <h2 className="subtitle">
              Senior Full-Stack Engineer · Frontend Specialist
            </h2>
            <h1 className="leading-13">
              I craft <br /> <em className="text-primary">Interfaces</em> <br />{" "}
              that scale
            </h1>
            <p className="font-outfit text-description max-w-[500px] text-sm/7">
              5+ years building production-grade React & Next.js apps — from
              pixel-perfect design systems to cloud-native Azure backends. I
              turn complex requirements into clean, maintainable code.
            </p>
            <div className="flex gap-3">
              <Button variant="primary" onClick={(e) => console.log(e)}>
                View My Work
              </Button>
              <Button
                variant="secondary"
                onClick={(e) => console.log(e)}
                endIcon={<LuDownload />}
              >
                Download CV
              </Button>
            </div>
          </div>
          <div className="flex shrink-0 flex-col gap-3 self-end">
            <StatsCard title="5+" description="years experience" />
            <StatsCard title="100%" description="WCAG AA delivered" />
            <StatsCard title="40%" description="dev efficiency gain" />
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <div className="flex justify-between">
            <div>
              <p className="subtitle">Technologies</p>
              <h3>Tech Stack</h3>
            </div>
            <div>
              <p className="text-[#5e5e5e]">
                Frontend-heavy · Full-stack capable
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="text-[#5e5e5e]">Core · Frontend</p>
            <div className="flex gap-2">
              <Chip label="React.js" variant="primary" size="xs" />
              <Chip label="TypeScript" variant="primary" size="xs" />
              <Chip label="Next.js" variant="primary" size="xs" />
              <Chip label="JavaScript" variant="primary" size="xs" />
              <Chip label="HTML5 / CSS3" variant="primary" size="xs" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="text-[#5e5e5e]">State, UI & Styling</p>
            <div className="flex gap-2">
              <Chip label="Redux" variant="secondary" size="xs" />
              <Chip label="Zustand" variant="secondary" size="xs" />
              <Chip label="Tanstack Query" variant="secondary" size="xs" />
              <Chip label="Tailwind CSS" variant="secondary" size="xs" />
              <Chip label="Material UI" variant="secondary" size="xs" />
              <Chip label="Ant Design" variant="secondary" size="xs" />
              <Chip label="Storybook" variant="secondary" size="xs" />
              <Chip label="SCSS" variant="secondary" size="xs" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="text-[#5e5e5e]">Backend & APIs</p>
            <div className="flex gap-2">
              <Chip label="Node.js" variant="secondary" size="xs" />
              <Chip label="Express.js" variant="secondary" size="xs" />
              <Chip label="MongoDB" variant="secondary" size="xs" />
              <Chip label="MySQL" variant="secondary" size="xs" />
              <Chip label="REST APIs" variant="secondary" size="xs" />
              <Chip label="GraphQL" variant="secondary" size="xs" />
              <Chip label="JWT / OAuth" variant="secondary" size="xs" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="text-[#5e5e5e]">Testing, DevOps & Cloud</p>
            <div className="flex gap-2">
              <Chip label="Azure" variant="secondary" size="xs" />
              <Chip label="Azure Functions" variant="secondary" size="xs" />
              <Chip label="GitHub Actions" variant="secondary" size="xs" />
              <Chip label="Jest" variant="secondary" size="xs" />
              <Chip label="Vitest" variant="secondary" size="xs" />
              <Chip
                label="React Testing Library"
                variant="secondary"
                size="xs"
              />
              <Chip label="JWT / OAuth" variant="secondary" size="xs" />
              <Chip label="Cypress" variant="secondary" size="xs" />
              <Chip label="WCAG 2.1" variant="secondary" size="xs" />
              <Chip label="Webpack" variant="secondary" size="xs" />
            </div>
          </div>
        </section>
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
        <Footer />
      </main>
    </div>
  );
};

export default Home;
