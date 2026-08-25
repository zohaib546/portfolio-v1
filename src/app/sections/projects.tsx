import Chip from "@/components/chip";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col gap-5">
      <div>
        <p className="subtitle">Selected work</p>
        <h3>Featured projects</h3>
      </div>

      <div className="space-y-4">
        <div className="border-card-body space-y-4 rounded-xl border bg-[#060e09] p-8">
          <Chip
            label="Featured · Afiniti"
            size="normal"
            variant="primary"
            iconStart={<FaStar color="#e4be37" />}
          />
          <h4 className="font-dm-serif-display text-2xl font-normal">
            SSA Reporting App — Full Accessibility Overhaul
          </h4>
          <p className="font-outfit text-description text-sm/5">
            The US Social Security Administration&apos;s reporting platform had
            zero WCAG compliance. Redesigned all React components into semantic
            HTML, implemented screen-reader and keyboard navigation support, and
            delivered on-time under strict federal deadlines.
          </p>
          <div className="space-x-2">
            <Chip label="React" size="normal" variant="secondary" />
            <Chip label="Typescript" size="normal" variant="secondary" />
            <Chip label="Material UI" size="normal" variant="secondary" />
            <Chip label="WCAG 2.1 AA" size="normal" variant="secondary" />
            <Chip label="Storybook" size="normal" variant="secondary" />
            <Chip label="Vitest" size="normal" variant="secondary" />
          </div>
          <div className="border-card-body rounded-xl border bg-[#0D0D0F] p-4">
            <h5 className="text-primary font-dm-mono mb-2 text-sm capitalize">
              Key achievements
            </h5>
            <ul className="text-description font-outfit space-y-1 text-sm">
              <li className="flex items-center gap-1">
                <GoArrowRight className="text-placeholder" />
                Built centralised design system with 40+ reusable components
              </li>
              <li className="flex items-center gap-1">
                <GoArrowRight className="text-placeholder" />
                Reduced UI conflicts across codebase by 30%
              </li>
              <li className="flex items-center gap-1">
                <GoArrowRight className="text-placeholder" />
                Increased test coverage by 35% via React Testing Library
              </li>
              <li className="flex items-center gap-1">
                <GoArrowRight className="text-placeholder" />
                Shipped 100% WCAG 2.1 AA compliant, zero deadline delays
              </li>
            </ul>
          </div>
          <div className="flex gap-3">
            <div className="border-primary-border flex grow flex-col gap-1 rounded-xl border bg-[#111113] p-5 text-center">
              <h6 className="font-dm-serif-display text-primary text-3xl font-normal">
                100%
              </h6>
              <p className="font-outfit m-auto w-20 text-sm leading-3.5 font-normal text-[#7a766e]">
                WCAG AA compliance
              </p>
            </div>
            <div className="border-primary-border flex grow flex-col gap-1 rounded-xl border bg-[#111113] p-5 text-center">
              <h6 className="font-dm-serif-display text-primary text-3xl font-normal">
                —30%
              </h6>
              <p className="font-outfit m-auto w-20 text-sm leading-3.5 font-normal text-[#7a766e]">
                UI Conflict Reduction
              </p>
            </div>
            <div className="border-primary-border flex grow flex-col gap-1 rounded-xl border bg-[#111113] p-5 text-center">
              <h6 className="font-dm-serif-display text-primary text-3xl font-normal">
                +35%
              </h6>
              <p className="font-outfit m-auto w-20 text-sm leading-3.5 font-normal text-[#7a766e]">
                Test coverage lift
              </p>
            </div>
          </div>
          <div>
            <Link
              href="/"
              className="text-primary font-dm-mono flex items-center gap-0.5 text-xs underline underline-offset-4"
            >
              View Case Study
              <GoArrowRight className="mt-[2px] text-[15px]" />
            </Link>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="border-card-body space-y-4 rounded-xl border bg-[#0d0d0f] p-8">
            <Chip label="Afiniti · Showcase" size="normal" variant="primary" />
            <h4 className="font-dm-serif-display text-2xl font-normal">
              Centralised Design System Library
            </h4>
            <p className="font-outfit text-description text-sm leading-[1.7]">
              Built a global design system from scratch — CSS variables,
              typography, icons & 40+ reusable components with Storybook. Single
              source of truth across all product UIs.
            </p>
            <div className="space-x-2">
              <Chip label="React" size="normal" variant="secondary" />
              <Chip label="Material UI" size="normal" variant="secondary" />
              <Chip label="Storybook" size="normal" variant="secondary" />
            </div>
            <div className="border-divider border"></div>
            <div className="flex justify-between">
              <span className="text-primary font-dm-mono text-xs">
                +40% dev efficiency
              </span>
              <Link
                href="/"
                className="text-description font-dm-mono flex items-center gap-0.5 text-xs"
              >
                View
                <GoArrowRight />
              </Link>
            </div>
          </div>
          <div className="border-card-body space-y-4 rounded-xl border bg-[#0d0d0f] p-8">
            <Chip label="Visiomate · Cloud" size="normal" variant="primary" />
            <h4 className="font-dm-serif-display text-2xl font-normal">
              Serverless Form-Builder on Azure
            </h4>
            <p className="font-outfit text-description text-sm leading-[1.7]">
              Fully serverless cloud-native platform — React frontend with Azure
              Functions and Blob Storage. Zero infrastructure to maintain.
              Supply chain modules improved system efficiency by 25%.
            </p>
            <div className="space-x-2">
              <Chip label="React" size="normal" variant="secondary" />
              <Chip label="Azure Functions" size="normal" variant="secondary" />
              <Chip label="Blob Storage" size="normal" variant="secondary" />
            </div>
            <div className="border-divider border"></div>
            <div className="flex justify-between">
              <span className="text-primary font-dm-mono text-xs">
                +40% dev efficiency
              </span>
              <Link
                href="/"
                className="text-description font-dm-mono flex items-center gap-0.5 text-xs"
              >
                View
                <GoArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
