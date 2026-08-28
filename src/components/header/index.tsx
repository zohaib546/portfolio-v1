import Nav from "../nav";
import Chip from "../chip";
import Logo from "../logo";
import { NAVLINKS } from "@/constants/navLinks";

const Header = () => {
  return (
    <header className="header">
      <Logo redirect="/" />
      <Nav data={NAVLINKS} />
      <Chip label="Available for Hire" isOnline={true} variant="primary" />
    </header>
  );
};

export default Header;
