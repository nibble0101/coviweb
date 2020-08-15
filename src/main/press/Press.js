import React, { useContext } from "react";
import Zoom from "react-reveal/Zoom";
import NewYorkTimes from "./NewYorkTimes";
import LoadMoreArticles from "./LoadMoreArticles";
import { context } from "../../store";

function Press(props) {
  const { articles } = useContext(context);
  return (
    <Zoom>
      <div className = "press">
        <h1> <span className = "covid-text">Covid-19</span> related articles from New York Times </h1>
        {articles &&
          articles.docs.map((article) => {
            return <NewYorkTimes article={article} key={Math.random()} />;
          })}
        <LoadMoreArticles />
      </div>
    </Zoom>
  );
}

export default Press;
