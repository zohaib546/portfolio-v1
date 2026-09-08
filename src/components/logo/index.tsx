import Link from "next/link";
import { AiFillCode } from "react-icons/ai";
import { BiCodeCurly } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { PiCode, PiCodeBold } from "react-icons/pi";
import { TbCodeCircle2Filled, TbFileCodeFilled } from "react-icons/tb";
interface ILogo {
  redirect: string;
}
const Logo = ({ redirect }: ILogo) => {
  return (
    <Link href={redirect} className="flex items-center gap-2">
      <PiCodeBold className="text-primary text-xl" />
      <div className="font-dm-mono text-sm text-[#f0ede6]">
        Zohaib
        <em className="text-primary">.</em>
        dev
      </div>
    </Link>
  );
};

export default Logo;
