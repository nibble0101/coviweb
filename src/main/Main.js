import React, { useContext } from "react";
import Display from "./dashboard/Display";
import About from "./about/About";
import { context } from "../store";

function Main(props) {
  const { activeMenu } = useContext(context);
  return (
    <React.Fragment>
      {(activeMenu === "dashboard") && <Display />}
      {(activeMenu === "about") && <About />}
    </React.Fragment>
  );
}

export default Main;
