import Link from "next/link";

interface INav {
  data: INavData[];
}

interface INavData {
  route: string;
  name: string;
}

const Nav = ({ data }: INav) => {
  return (
    <nav className="nav">
      {data.map((nav) => (
        <li key={nav.name} className="nav__list">
          <Link href={nav.route}>{nav.name}</Link>
        </li>
      ))}
    </nav>
  );
};

export default Nav;
