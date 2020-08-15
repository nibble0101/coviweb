import React, { useContext, useState, useEffect, useCallback } from "react";
import Fade from "react-reveal/Fade";
import NewYorkTimes from "./NewYorkTimes";
import LoadMoreArticles from "./LoadMoreArticles";
import Loader from "../../loader/Loader";
import urlFactory from "./url-factory";

function Press(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const pageHandle = useCallback((event) => {
    if (page === maxPage) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
  });

  useEffect(() => {
    if (!page) {
      const cachedData = JSON.parse(localStorage.getItem("articles"));
      if (cachedData && cachedData.length) {
        setArticles((prevArticles) => [
          ...prevArticles,
          ...cachedData
        ]);
        return;
      }
    }
    urlFactory.currentPage = page;
    const url = urlFactory.url + process.env.REACT_APP_API_KEY;
    async function fetchArticles() {
      setIsLoading(true);
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setArticles((prevArticles) => {
            localStorage.setItem(
              "articles",
              JSON.stringify([...prevArticles, ...data.response.docs])
            );
            return [...prevArticles, ...data.response.docs];
          });
          const { hits } = data.response.meta;
          setMaxPage(Math.floor(hits / 10));
        });
      setIsLoading(false);
    }
    fetchArticles();
  }, [page]);
  return (
    <React.Fragment>
      <div className="press-wrapper">
        {isLoading && <Loader />}
        {!isLoading && (
          <Fade>
            <div className="press">
              <h1>
                <span className="covid-text">Covid-19</span> related articles
                from New York Times
              </h1>
              {articles.map((article) => {
                return <NewYorkTimes article={article} key={Math.random()} />;
              })}
              <LoadMoreArticles pageHandle={pageHandle} />
            </div>
          </Fade>
        )}
      </div>
    </React.Fragment>
  );
}

export default Press;
