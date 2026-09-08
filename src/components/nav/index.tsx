"use client";
import Link from "next/link";
import ScrollSpy from "react-scrollspy-navigation";
interface INav {
  data: INavData[];
}

interface INavData {
  route: string;
  name: string;
}

const Nav = ({ data }: INav) => {
  return (
    <ScrollSpy activeClass="nav__link--active">
      <nav className="nav">
        {data.map((nav) => (
          <li key={nav.name} className="nav__item">
            <a href={nav.route} className="nav__link">
              {nav.name}
            </a>
          </li>
        ))}
      </nav>
    </ScrollSpy>
  );
};

export default Nav;
