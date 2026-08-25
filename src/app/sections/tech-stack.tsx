import Chip from "@/components/chip";

const TechStack = () => {
  return (
    <section id="techstack" className="flex flex-col gap-5">
      <div className="flex justify-between">
        <div>
          <p className="subtitle">Technologies</p>
          <h3>Tech Stack</h3>
        </div>
        <div>
          <p className="text-[#5e5e5e]">Frontend-heavy · Full-stack capable</p>
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <p className="text-[#5e5e5e]">Core · Frontend</p>
        <div className="flex flex-wrap gap-2">
          <Chip label="React.js" variant="primary" size="normal" />
          <Chip label="TypeScript" variant="primary" size="normal" />
          <Chip label="Next.js" variant="primary" size="normal" />
          <Chip label="JavaScript" variant="primary" size="normal" />
          <Chip label="HTML5 / CSS3" variant="primary" size="normal" />
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <p className="text-[#5e5e5e]">State, UI & Styling</p>
        <div className="flex flex-wrap gap-2">
          <Chip label="Redux" variant="secondary" size="normal" />
          <Chip label="Zustand" variant="secondary" size="normal" />
          <Chip label="Tanstack Query" variant="secondary" size="normal" />
          <Chip label="Tailwind CSS" variant="secondary" size="normal" />
          <Chip label="Material UI" variant="secondary" size="normal" />
          <Chip label="Ant Design" variant="secondary" size="normal" />
          <Chip label="Storybook" variant="secondary" size="normal" />
          <Chip label="SCSS" variant="secondary" size="normal" />
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <p className="text-[#5e5e5e]">Backend & APIs</p>
        <div className="flex flex-wrap gap-2">
          <Chip label="Node.js" variant="secondary" size="normal" />
          <Chip label="Express.js" variant="secondary" size="normal" />
          <Chip label="MongoDB" variant="secondary" size="normal" />
          <Chip label="MySQL" variant="secondary" size="normal" />
          <Chip label="REST APIs" variant="secondary" size="normal" />
          <Chip label="GraphQL" variant="secondary" size="normal" />
          <Chip label="JWT / OAuth" variant="secondary" size="normal" />
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <p className="text-[#5e5e5e]">Testing, DevOps & Cloud</p>
        <div className="flex flex-wrap gap-2">
          <Chip label="Azure" variant="secondary" size="normal" />
          <Chip label="Azure Functions" variant="secondary" size="normal" />
          <Chip label="GitHub Actions" variant="secondary" size="normal" />
          <Chip label="Jest" variant="secondary" size="normal" />
          <Chip label="Vitest" variant="secondary" size="normal" />
          <Chip
            label="React Testing Library"
            variant="secondary"
            size="normal"
          />
          <Chip label="JWT / OAuth" variant="secondary" size="normal" />
          <Chip label="Cypress" variant="secondary" size="normal" />
          <Chip label="WCAG 2.1" variant="secondary" size="normal" />
          <Chip label="Webpack" variant="secondary" size="normal" />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
