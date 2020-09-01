import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import { context } from "../../store";

function Pagination(props) {
  const {
    pages,
    nextChapterHandler,
    previousChapterHandler,
    currentPageHandler,
  } = useContext(context);

  const pageElements = [];
  if (pages) {
    const { chapters, currentChapter, currentPage } = pages;
    const { from, to } = chapters[currentChapter - 1];
    for (let i = from; i <= to; i++) {
      if (i === currentPage) {
        pageElements.push(
          <button
            key={"page" + i}
            value = {i}
            style={{ backgroundColor: "grey", color: "yellow" }}
          >
            {i}
          </button>
        );
      } else {
        pageElements.push(<button key={"page" + i} value = {i}>{i}</button>);
      }
    }
  }
  return (
    <div className="pagination">
      <h1 className="title">PAGES</h1>
      <section className="controls">
        <Fade>
          <p className="previous " onClick={previousChapterHandler}>
            <button>
              <i className="fas fa-angle-double-left" id="previous-chapter"></i>
            </button>
            <button>
              <i className="fas fa-angle-left" id="previous-page"></i>
            </button>
          </p>
        </Fade>

        <p className="pages" onClick={currentPageHandler}>
          {pages && pageElements}
        </p>

        <Fade>
          <p className="next" onClick={nextChapterHandler}>
            <button>
              <i className="fas fa-angle-right" id="next-page"></i>
            </button>
            <button>
              <span>
                <i className="fas fa-angle-double-right" id="next-chapter"></i>
              </span>
            </button>
          </p>
        </Fade>
      </section>
    </div>
  );
}

export default Pagination;
