export interface IExperience {
  companyName: string;
  duration: string;
  location: string;
  role: string;
  contributions: string[];
}
export const EXPERIENCE: IExperience[] = [
  {
    companyName: "Afiniti",
    duration: "Feb 2023 - Present",
    location: "Lahore · Hybrid",
    role: "Senior Software Engineer",
    contributions: [
      "WCAG 2.1 AA for US Social Security Administration — 100% compliant, zero-delay federal launch",
      "Centralised design system reducing UI conflicts by 30% across all products",
      "React component library with Material UI + Storybook — dev efficiency up 40%",
      "Test coverage elevated 35% with React Testing Library and Vitest",
      "Championed AI-first SDLC with Cursor, Copilot, and Claude",
    ],
  },
  {
    companyName: "Visiomate",
    duration: "Feb 2022 - Jan 2023",
    location: "Lahore · OnSite",
    role: "Software Engineer",
    contributions: [
      "Fully serverless Azure form-builder — React, Azure Functions, Blob Storage",
      "Supply chain management modules — system efficiency up 25%",
      "Redux Toolkit optimisation reducing redundant API calls across modules",
    ],
  },
];
