import React, { useContext, useCallback } from "react";
import { context } from "../../store";
import Fade from "react-reveal/Fade";
import NewYorkTimes from "./NewYorkTimes";
import LoadMoreArticles from "./LoadMoreArticles";
import Loader from "../../loader/Loader";

function Press(props) {
  const {
    press: { articles, isLoading },
    setNextPressPage,
  } = useContext(context);

  const pageHandle = useCallback(() => {
    setNextPressPage();
  }, [setNextPressPage]);

  if (isLoading === true) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <div className="press-wrapper">
        <Fade>
          <div className="press">
            <h1>
              <span className="covid-text">Covid-19</span> related articles from
              New York Times
            </h1>
            {articles.map((article) => {
              return <NewYorkTimes article={article} key={Math.random()} />;
            })}
            <LoadMoreArticles pageHandle={pageHandle} />
          </div>
        </Fade>
      </div>
    </React.Fragment>
  );
}

export default Press;
