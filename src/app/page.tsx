"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "./sections/hero";
import TechStack from "./sections/tech-stack";
import Testimonials from "./sections/testimonials";
import AiAugmented from "./sections/ai-augmented";
import Experience from "./sections/experience";
import Projects from "./sections/projects";
import HomeMain from "./sections/home-main";
import Chat from "@/components/chat/chat";
import { IoIosRocket, IoMdClose, IoMdSend } from "react-icons/io";
import { useState } from "react";
import { motion } from "motion/react";
import Button from "@/components/button";
import { CgNotes } from "react-icons/cg";
import { MdOutlineSettings } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";

export default function HomePage() {
  const [showAssistant, setShowAssistant] = useState(false);
  return (
    <div className="home__outer flex h-full w-full items-center justify-center">
      <div className="home__inner">
        <motion.main
          layout
          className="relative flex flex-1 shrink flex-col overflow-hidden"
          animate={{
            flexGrow: 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <Header />
          <HomeMain>
            {/* <section>
            <Chat />
          </section> */}
            <Hero
              onClick={setShowAssistant}
              isAssistantVisisble={showAssistant}
            />
            <TechStack />
            <AiAugmented />
            <Experience />
            <Projects />
            <Testimonials />
            <Footer />
          </HomeMain>
        </motion.main>
        <motion.aside
          layout
          animate={{
            flexBasis: showAssistant ? "300px" : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          id="assistant-sidebar"
          className="h-full flex-0 overflow-hidden"
        >
          <motion.div
            animate={{
              opacity: showAssistant ? 1 : 0,
              x: showAssistant ? 0 : 20,
            }}
            transition={{
              duration: 0.1,
              ease: "easeOut",
            }}
            className="flex h-full w-[300px] flex-col border-l border-[#1e2420]"
          >
            <div className="flex shrink-0 grow-0 basis-auto items-center justify-between border-b border-[#1e2420] p-[22px_12px_21px_22px]">
              <div className="flex items-center gap-[10px]">
                <div
                  aria-hidden="true"
                  className="flex h-[29px] w-[29px] items-center justify-center rounded-lg bg-linear-[135deg,#6BBF85,#52A872] text-sm text-[#0a0f0c] shadow-[0_4px_16px_rgba(107,191,133,0.25)]"
                >
                  🤖
                </div>
                <div>
                  <h2 className="font-dm-serif-display text-[13px] tracking-normal text-[#F0EDE6] capitalize">
                    Ask Me Anything
                  </h2>
                  <p className="font-dm-mono text-primary text-[10px] tracking-[0.5px] uppercase">
                    AI powered
                  </p>
                </div>
              </div>
              <button
                className="hover:text-primary flex h-[29px] w-[29px] cursor-pointer items-center justify-center rounded-lg bg-transparent text-[#a8a49c] transition-all duration-200 hover:bg-[rgba(107,191,133,0.1)]"
                onClick={() => setShowAssistant(false)}
                title="Close Assistant"
              >
                <IoMdClose />
              </button>
            </div>
            <div className="flex shrink-1 grow-1 basis-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent flex-col gap-4 overflow-y-auto p-[22px] transition-all duration-200 hover:scrollbar-thumb-[#2A4A35]">
              <div className="message message--assistant">
                <div className="message__bubble">
                  Hey there! 👋 I'm Zohaib's AI assistant. Ask me anything about
                  his experience, projects, tech stack, or availability.
                </div>
              </div>
              <div className="message message--user">
                <div className="message__bubble">
                  What are you experienced with?
                </div>
              </div>
              <div className="message message--assistant">
                <div className="message__bubble">
                  I specialize in React, Next.js, TypeScript, and full-stack
                  development. From building design systems to cloud-native
                  architectures, I've shipped production-grade apps that are
                  fast, accessible, and scalable. 🚀
                </div>
              </div>
              <div className="message message--assistant">
                <div className="message__bubble">
                  I specialize in React, Next.js, TypeScript, and full-stack
                  development. From building design systems to cloud-native
                  architectures, I've shipped production-grade apps that are
                  fast, accessible, and scalable. 🚀
                </div>
              </div>
              <div className="message message--assistant">
                <div className="message__typing-indicator">
                  <div className="message__typing-dot"></div>
                  <div className="message__typing-dot"></div>
                  <div className="message__typing-dot"></div>
                </div>
              </div>
            </div>
            <div className="flex shrink-0 grow-0 basis-auto flex-col gap-3 border-t border-[#1e2420] p-[16px_22px]">
              <div className="grid grid-cols-2 gap-2">
                <button className="hover:text-primary flex cursor-pointer items-center justify-center gap-1 rounded-sm border border-[rgba(107,191,133,0.15)] bg-[rgba(107,191,133,0.08)] p-[5px_10px] text-xs font-medium text-[#A8A49C] transition-all duration-200 hover:border-[rgba(107,191,133,0.25)] hover:bg-[rgba(107,191,133,0.15)]">
                  <CgNotes />
                  <span>Experience</span>
                </button>
                <button className="hover:text-primary flex cursor-pointer items-center justify-center gap-1 rounded-sm border border-[rgba(107,191,133,0.15)] bg-[rgba(107,191,133,0.08)] p-[5px_10px] text-xs font-medium text-[#A8A49C] transition-all duration-200 hover:border-[rgba(107,191,133,0.25)] hover:bg-[rgba(107,191,133,0.15)]">
                  <IoIosRocket />
                  Recent Work
                </button>
                <button className="hover:text-primary flex cursor-pointer items-center justify-center gap-1 rounded-sm border border-[rgba(107,191,133,0.15)] bg-[rgba(107,191,133,0.08)] p-[5px_10px] text-xs font-medium text-[#A8A49C] transition-all duration-200 hover:border-[rgba(107,191,133,0.25)] hover:bg-[rgba(107,191,133,0.15)]">
                  <IoSettingsSharp />
                  <span>Tech Stack</span>
                </button>
                <button className="hover:text-primary flex cursor-pointer items-center justify-center gap-1 rounded-sm border border-[rgba(107,191,133,0.15)] bg-[rgba(107,191,133,0.08)] p-[5px_10px] text-xs font-medium text-[#A8A49C] transition-all duration-200 hover:border-[rgba(107,191,133,0.25)] hover:bg-[rgba(107,191,133,0.15)]">
                  <FaCalendarAlt />
                  <span>Availability</span>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  className="font-outfit duration:200 h-[35px] flex-1 rounded-lg border border-[#2A4A35] bg-[#0D0D0F] p-[10px_12px] text-xs text-[#F0EDE6] outline-0 transition-all focus:border-[#6BBF85] focus:bg-linear-[135deg,#0D0D0F,rgba(107,191,133,0.03))] focus:shadow-[0_0_12px_rgba(107,191,133,0.15)] focus:outline-0"
                  placeholder="Ask Anything..."
                />
                <button className="flex h-[35px] w-[35px] shrink-0 cursor-pointer items-center justify-center rounded-lg bg-linear-[135deg,#6BBF85,#52A872] text-[#060A07] shadow-[0_4px_12px_rgba(107,191,133,0.2)]">
                  <IoMdSend />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.aside>
      </div>
    </div>
  );
}
