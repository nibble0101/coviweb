import React, { useContext } from "react";
import Zoom from "react-reveal/Zoom";
import { context } from "../../store";

function Pagination(props) {
  const {
    pages,
    currentPageHandler,
    nextChapterHandler,
    previousChapterHandler,
  } = useContext(context);

  const pageElements = [];

  if (pages) {
    const { chapters, currentChapter } = pages;
    const { from, to } = chapters[currentChapter - 1];
    for (let i = from; i <= to; i++) {
      pageElements.push(
        <button key={"page" + i} value={i}>
          {i}
        </button>
      );
    }
  }
  return (
    <div className="pagination">
      <h1 className="title">PAGES</h1>
      <section className="controls">
        <Zoom>
          <p className="previous " onClick={previousChapterHandler}>
            <button >
              <i className="fas fa-angle-double-left" id="first"></i>
            </button>
            <button >
              <i className="fas fa-angle-left" id="previous"></i>
            </button>
          </p>
        </Zoom>

        <p className="pages" onClick={currentPageHandler}>
          {pages && pageElements}
        </p>

        <Zoom>
          <p className="next" onClick={nextChapterHandler}>
            <button >
              <i className="fas fa-angle-right" id="next"></i>
            </button>
            <button >
              <span>
                <i className="fas fa-angle-double-right" id="last"></i>
              </span>
            </button>
          </p>
        </Zoom>
      </section>
    </div>
  );
}

export default Pagination;
