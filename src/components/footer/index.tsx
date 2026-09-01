import Link from "next/link";
import LinkButton from "../link-button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { MdArrowUpward } from "react-icons/md";
import { FOOTER_NAV_LINKS, SOCIAL_LINKS } from "@/constants/navigation";
import { ReactNode } from "react";

const SOCIAL_ICONS: Record<string, ReactNode> = {
  email: <HiOutlineMail />,
  phone: <IoMdCall />,
  linkedin: <FaLinkedin />,
  github: <FaGithub />,
};

const Footer = () => {
  return (
    <footer id="footer" className="">
      <div className="flex justify-between px-[40px] pb-[40px]">
        <div>
          <div className="flex flex-col gap-2">
            <h2 className="subtitle">Get In Touch</h2>
            <h1 className="text-3xl leading-9">
              Let&apos;s build <br />
              <em className="text-primary">something great.</em>
            </h1>
            <p className="font-outfit text-description text-sm/7">
              Open to full-time roles, contracts, and consulting. <br /> Based
              in Lahore · open to remote worldwide.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="subtitle">Explore</h2>
          <ul className="space-y-2">
            {FOOTER_NAV_LINKS.map(({ name, route }, index) => (
              <li key={index} className="font-outfit text-description text-sm">
                <Link href={route}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="subtitle">Reach Out</h2>
          <ul className="space-y-4">
            {SOCIAL_LINKS.map(({ route, name, title, type }, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="text-primary flex h-[28px] w-[28px] items-center justify-center rounded-[4px] border border-[#222225] bg-[#111113]">
                  {SOCIAL_ICONS[type]}
                </div>
                <div className="text-xs">
                  <div className="text-primary">{name}</div>
                  <Link href={route} className="text-description">
                    {title}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t-divider mx-[40px] flex items-center justify-between border-t pt-[40px]">
        <p className="font-dm-mono text-center text-xs text-[#5e5e5e]">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
        <LinkButton
          href="#hero"
          variant="primary"
          className="justify-center"
          startIcon={<MdArrowUpward />}
        >
          Back to Top
        </LinkButton>
      </div>
    </footer>
  );
};

export default Footer;
