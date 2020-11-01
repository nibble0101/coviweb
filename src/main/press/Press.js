import React, { useState, useEffect, useCallback } from "react";
import Fade from "react-reveal/Fade";
import NewYorkTimes from "./NewYorkTimes";
import LoadMoreArticles from "./LoadMoreArticles";
import Loader from "../../loader/Loader";
import urlFactory from "./url-factory";

/*
Determines how long data which has been stored in local
storage should remain valid in milliseconds.
*/
const LOCAL_STORAGE_LIFE_SPAN = 24 * 60 * 60 * 1000;
function readPage() {
  const articles = JSON.parse(localStorage.getItem("articles"));

  if (articles && articles.length) {
    const timeDelta = Date.now() - articles.setDate;
    if (timeDelta > LOCAL_STORAGE_LIFE_SPAN) {
      return 1;
    }
    const page = articles.length / 10;
    if (Number.isInteger(page)) {
      return page - 1;
    }
    return Math.floor(page);
  }
  return 0;
}
function Press(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(readPage);
  const [maxPage, setMaxPage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const pageHandle = useCallback(() => {
    if (maxPage === articles.length) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
  }, [maxPage, articles]);

  useEffect(() => {
    const cachedData = JSON.parse(localStorage.getItem("articles"));
    if (cachedData && cachedData.length) {
      setIsLoading(true);
      const offsetPage = cachedData.length / 10;
      if (Number.isInteger(offsetPage)) {
        if (page === offsetPage - 1) {
          setArticles([...cachedData]);
          setIsLoading(false);
          return;
        }
      } else {
        if (page === Math.floor(offsetPage)) {
          setArticles([...cachedData]);
          setIsLoading(false);
          return;
        }
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
            localStorage.setItem("current-page", JSON.stringify(page));
            return [...prevArticles, ...data.response.docs];
          });
          setMaxPage(data.response.meta.hits);
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
