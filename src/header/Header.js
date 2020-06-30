import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";

function Header(props) {
  return (
    <header className="header">
      <Logo />
      <Menu />
    </header>
  );
}
export default Header;
