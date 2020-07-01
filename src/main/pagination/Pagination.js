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
    <div className="pagination" >
      <h1 className="title">Pages</h1>
      <section className="controls">
        <Zoom>
          <p className="previous " onClick={previousChapterHandler}>
            <button id="first"> {"<"} </button>
            <button id="previous"> {"<<"} </button>
          </p>
        </Zoom>

        <p className="pages" onClick={currentPageHandler}>
          {pages && pageElements}
        </p>

        <Zoom>
          <p className="next" onClick={nextChapterHandler}>
            <button id="next"> {">>"} </button>
            <button id="last"> {">"} </button>
          </p>
        </Zoom>
      </section>
    </div>
  );
}

export default Pagination;
