import { AiFillThunderbolt } from "react-icons/ai";

const AiAugmented = () => {
  return (
    <section id="ai-augmented" className="flex flex-col gap-5">
      <div>
        <p className="subtitle">AI-augmented workflow</p>
        <h3>Engineering with AI</h3>
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-[#1A2830] bg-[#0A1014] p-[18px]">
        <div>
          <AiFillThunderbolt color="#fa8648" className="text-2xl" />
        </div>
        <div>
          <h4 className="font-outfit mb-1 text-sm font-medium text-[#A0BBCC]">
            AI-first SDLC practitioner
          </h4>
          <p className="font-outfit text-sm/5 text-[#6A8899]">
            Integrates ChatGPT, Claude, Cursor, and GitHub Copilot into daily
            engineering — code generation, debugging, PR reviews, and
            documentation. AI-first principles applied without sacrificing
            architectural clarity or code quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AiAugmented;
