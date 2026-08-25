import Chip from "@/components/chip/";
import { IExperience } from "@/constants/experience";
import { GoArrowRight } from "react-icons/go";

interface IExperienceList {
  data: IExperience;
  index: number;
}

const ExperienceList = ({
  data: { companyName, contributions, duration, location, role },
  index,
}: IExperienceList) => {
  return (
    <li className="relative pl-10">
      <div
        className={`absolute top-2 left-0 h-2.5 w-2.5 rounded-full ${index === 0 ? "bg-primary" : "bg-card-body"}`}
        aria-hidden="true"
      ></div>
      <div className="flex items-center gap-2">
        <h4 className="text-md font-outfit font-medium text-[#f0ede6]">
          {companyName}
        </h4>
        {index === 0 && <Chip label={location} size="sm" variant="primary" />}
        <span className="font-dm-mono text-placeholder mt-0.5 text-xs">
          {duration}
        </span>
      </div>
      <div>
        <h5 className="text-primary font-dm-mono my-1.5 text-xs font-medium">
          {role}
        </h5>
        <ul className="mb-5 space-y-1.5">
          {contributions.map((contribution, index) => (
            <li
              key={index}
              className="text-description font-outfit flex items-center gap-2 text-sm"
            >
              <GoArrowRight className="text-placeholder" />
              {contribution}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default ExperienceList;
