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
          <Chip label="React Testing Library" variant="secondary" size="xs" />
          <Chip label="JWT / OAuth" variant="secondary" size="xs" />
          <Chip label="Cypress" variant="secondary" size="xs" />
          <Chip label="WCAG 2.1" variant="secondary" size="xs" />
          <Chip label="Webpack" variant="secondary" size="xs" />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
