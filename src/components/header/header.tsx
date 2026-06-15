import Nav from "./../nav/nav";
import Chip from "../chip/chip";
import Logo from "./../logo/logo";
import { navLinks } from "./../../constants/navLinks";

const Header = () => {
  return (
    <header className="header">
      <Logo redirect="/" />
      <Nav data={navLinks} />
      <Chip label="Available for Hire" isOnline={true} variant="primary" />
    </header>
  );
};

export default Header;
