import Chip from "@/components/chip/";
import ExperienceList from "@/components/experience-list";
import { EXPERIENCE } from "@/constants/experience";

const Experience = () => {
  return (
    <section id="experience" className="flex flex-col gap-5">
      <div>
        <p className="subtitle">Career</p>
        <h3>Experience</h3>
      </div>
      <div>
        <ul className="relative">
          <div
            aria-hidden="true"
            className="bg-card-body absolute left-1 h-full w-[1px]"
          ></div>
          {EXPERIENCE.map((exp, index) => (
            <ExperienceList key={index} data={exp} index={index} />
          ))}
        </ul>
        <Chip
          label="Certificate of Appreciation · Afiniti  ·  BS Computer Science, University of Sargodha (2019)"
          variant="secondary"
          size="normal"
        />
      </div>
    </section>
  );
};

export default Experience;
