import React, { useEffect, useContext } from "react";
import Zoom from "react-reveal/Zoom";
import { context } from "../../store";

function Visualization(props) {
  const { data } = useContext(context);
  return (
    <Zoom>
      <h1> Visualization </h1>
    </Zoom>
  );
}

export default Visualization;
