import React, {useContext} from "react";
import {context} from "../store";
function Menu(props) {
  const { menuClickHandler} = useContext(context);
  return (
    <div className="menu" onClick = {menuClickHandler}>
      <ul>
        <li id="dashboard"> Dashboard </li>
        <li id="about"> About </li>
        <li id="visualization"> Visualization </li>
        <li id="press"> Press </li>
      </ul>
    </div>
  );
}

export default Menu;