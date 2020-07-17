import React, { useContext } from "react";
import { context } from "../store";
import HamburgerMenu from "react-hamburger-menu";
import { NavLink } from "react-router-dom";
function Menu(props) {
  const { menuClickHandler } = useContext(context);
  const [isOpen, setIsOpen] = React.useState(false);
  const myRef = React.useRef();
  const hambugerClickHandler = React.useCallback(() => {
    setIsOpen(!isOpen);
    document.getElementById("menu").classList.toggle("display-menu");
  }, [isOpen]);
  return (
    <div className="menu">
      <ul
        id="menu"
        ref={myRef}
        onClick={(e) => {
          menuClickHandler(e);
          hambugerClickHandler();
        }}
      >
        <li id="dashboard">
          <NavLink exact strict to="/dashboard" activeClassName="active-bg">
            Dashboard
          </NavLink>
        </li>
        <li id="about">
          <NavLink exact strict to="/about" activeClassName="active-bg">
            About
          </NavLink>
        </li>
        <li id="visualization">
          <NavLink exact strict to="/visualization" activeClassName="active-bg">
            Visualization
          </NavLink>
        </li>
        <li id="press">
          <NavLink exact strict to="/press" activeClassName="active-bg">
            Press
          </NavLink>
        </li>
      </ul>
      <HamburgerMenu
        isOpen={isOpen}
        menuClicked={hambugerClickHandler}
        width={18}
        height={10}
        strokeWidth={2}
        color={"#46cf73"}
        className={"hamburger-menu-icon"}
      />
    </div>
  );
}

export default Menu;
