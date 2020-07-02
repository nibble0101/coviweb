import React, { useContext } from "react";
import Zoom from "react-reveal/Zoom";
import NewYorkTimes from "./NewYorkTimes";
import { context } from "../../store";

function Press(props) {
  const { articles } = useContext(context);
  return (
    <Zoom>
      <div className = "press">
        <h1> Covid-19 related articles from New York Times </h1>
        {articles &&
          articles.docs.map((article) => {
            return <NewYorkTimes article={article} key={Math.random()} />;
          })}
      </div>
    </Zoom>
  );
}

export default Press;
