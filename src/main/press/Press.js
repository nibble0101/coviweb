import React, { useContext, useCallback } from "react";
import { context } from "../../store";
import Fade from "react-reveal/Fade";
import NewYorkTimes from "./NewYorkTimes";
import LoadMoreArticles from "./LoadMoreArticles";
// import Loader from "../../loader/Loader";

function Press(props) {
  const {
    press: { articles },
    setNextPressPage,
  } = useContext(context);
  // const [page, setPage] = useState(0);
  // const [maxPage, setMaxPage] = useState();
  // const [isLoading, setIsLoading] = useState(false);
  const pageHandle = useCallback(() => {
    setNextPressPage();
    // if (maxPage === articles.length) {
    //   return;
    // }
    // setPage((prevPage) => prevPage + 1);
  }, [setNextPressPage]);

  // useEffect(() => {

  //   urlFactory.currentPage = page;
  //   const url = urlFactory.url + process.env.REACT_APP_API_KEY;
  //   async function fetchArticles() {
  //     setIsLoading(true);
  //     const data = await fetch(url).then(response => response.json());
  //     addNewArticles(data.response.docs);
  //     setMaxPage(data.response.meta.hits);
  //     setIsLoading(false);
  //   }
  //   fetchArticles();
  // }, [page]);
  return (
    <React.Fragment>
      <div className="press-wrapper">
        {/* {isLoading && <Loader />} */}
        {
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
        }
      </div>
    </React.Fragment>
  );
}

export default Press;
