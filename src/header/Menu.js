import React, {useContext} from "react";
import {context} from "../store";
import HamburgerMenu from "react-hamburger-menu";
function Menu(props) {
  const { menuClickHandler} = useContext(context);
  const [isOpen, setIsOpen] = React.useState(false);
  const myRef = React.useRef();
  const hambugerClickHandler = React.useCallback(() => {
    setIsOpen(!isOpen);
    document.getElementById("menu").classList.toggle("display-menu")
  }, [isOpen]);
  return (
    <div className="menu" >
      <ul id = "menu" ref = {myRef} onClick = {(e) => {menuClickHandler(e); hambugerClickHandler() }}>
        <li id="dashboard"> Dashboard </li>
        <li id="about"> About </li>
        <li id="visualization"> Visualization </li>
        <li id="press"> Press </li>
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