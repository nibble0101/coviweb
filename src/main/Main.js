import React, { useContext } from "react";
import Display from "./dashboard/Display";
import About from "./about/About";
import Visualization from "./visualization/Visualization";
import Press from "./press/Press";
import { context } from "../store";

function Main(props) {
  const { activeMenu } = useContext(context);
  return (
    <React.Fragment>
      {activeMenu === "dashboard" && <Display />}
      {activeMenu === "about" && <About />}
      {activeMenu === "visualization" && <Visualization />}
      {activeMenu === "press" && <Press />}
    </React.Fragment>
  );
}

export default Main;
