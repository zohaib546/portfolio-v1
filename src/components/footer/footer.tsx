import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import Button from "./../button/button";
import { MdArrowUpward } from "react-icons/md";

const Footer = () => {
  return (
    <footer id="footer" className="">
      <div className="flex items-center justify-between">
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
        <div className="flex flex-col gap-4">
          <a href="#hero" className="link link--primary justify-center">
            <MdArrowUpward />
            Back to Top
          </a>
          <div className="flex items-center justify-between gap-4">
            <Link
              href="www.linkedin.com/in/zohaibashraf546"
              className="hover:text-primary rounded-md border border-[#212225] p-1 text-lg text-[#7A766E] transition-colors duration-300"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/zohaib546"
              className="hover:text-primary rounded-md border border-[#212225] p-1 text-lg text-[#7A766E] transition-colors duration-300"
            >
              <FaGithub />
            </Link>
            <Link
              href="tel:+923324131649"
              className="hover:text-primary rounded-md border border-[#212225] p-1 text-lg text-[#7A766E] transition-colors duration-300"
            >
              <IoMdCall />
            </Link>
            <Link
              href="mailto:zohaibashraf546@gmail.com"
              className="hover:text-primary rounded-md border border-[#212225] p-1 text-lg text-[#7A766E] transition-colors duration-300"
            >
              <HiOutlineMail />
            </Link>
          </div>
          <p className="font-outfit text-center text-sm/7 text-[#5e5e5e]">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
