import React from "react";
function Menu(props) {
  return (
    <div className="menu">
      <ul>
        <li id="dashboard"> Dashboard </li>
        <li id="about"> About </li>
        <li id="visualization"> Visualization </li>
        <li> More </li>
      </ul>
    </div>
  );
}

export default Menu;