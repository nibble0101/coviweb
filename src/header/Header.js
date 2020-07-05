import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import GlobalCases from "./GlobalCases";

function Header(props) {
  return (
    <header className="header">
      <Logo />
      <GlobalCases />
      <Menu />
    </header>
  );
}
export default Header;
