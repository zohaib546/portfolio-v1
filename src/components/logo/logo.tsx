import Link from "next/link";
interface ILogo {
  redirect: string;
}
const Logo = ({ redirect }: ILogo) => {
  return (
    <Link href={redirect}>
      <div className="font-dm-mono text-sm text-[#f0ede6]">
        Zohaib
        <em className="text-primary">.</em>
        dev
      </div>
    </Link>
  );
};

export default Logo;
