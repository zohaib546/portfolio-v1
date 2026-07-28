"use client";

import Button from "@/components/button/button";
import StatsCard from "@/components/cards/stats/stats";
import { LuDownload } from "react-icons/lu";

const Hero = () => {
  return (
    <section id="hero" className="flex justify-between gap-5">
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
          pixel-perfect design systems to cloud-native Azure backends. I turn
          complex requirements into clean, maintainable code.
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
  );
};
export default Hero;
