const COUNTRIES_PER_PAGE = 6;
const PAGES_PER_CHAPTER = 5;
function paginationReducer(state, action) {
  const { type } = action;
  if (type === "set-pages") {
    return {
      chapters: setPaginationChapters(action.payload),
      currentChapter: 1,
      currentPage: 1,
    };
  } else if (type === "set-next-page") {
    const {chapters, currentChapter, currentPage} = state;
    const {to} = chapters[currentChapter - 1];
    if(currentPage === to){
        if(currentChapter === chapters.length){
            return;
        }
        return {...state, currentPage: currentPage + 1, currentChapter: currentChapter + 1}
    }

    return { ...state, currentPage: currentPage + 1 };
  } else if (type === "set-previous-page") {
    const { chapters } = state;
    const { from } = chapters[chapters.length - 1];
    return {
      ...state,
      currentChapter: state.chapters.length,
      currentPage: from,
    };
  } else if (type === "set-next-chapter") {
    if (state.currentChapter === state.chapters.length) {
      return state;
    }
    const { chapters, currentChapter } = state;
    const { from } = chapters[currentChapter];
    return {
      ...state,
      currentChapter: state.currentChapter + 1,
      currentPage: from,
    };
  } else if (type === "set-previous-chapter") {
    if (state.currentChapter === 1) {
      return state;
    }
    const { chapters, currentChapter } = state;
    const { from } = chapters[currentChapter - 2];
    return {
      ...state,
      currentChapter: state.currentChapter - 1,
      currentPage: from,
    };
  } else if (type === "set-current-page") {
    return { ...state, currentPage: action.payload };
  }
}

function setPaginationChapters(length) {
  const pageCount = Math.ceil(length / COUNTRIES_PER_PAGE);
  const chapterCount = Math.ceil(pageCount / PAGES_PER_CHAPTER);
  const pageRange = [];
  for (let i = 1; i <= chapterCount; i++) {
    let from = (i - 1) * PAGES_PER_CHAPTER + 1;
    let to = i * PAGES_PER_CHAPTER;
    if (i === chapterCount) {
      to = pageCount;
    }
    pageRange.push({ from, to });
  }
  return pageRange;
}

export { paginationReducer, COUNTRIES_PER_PAGE, PAGES_PER_CHAPTER };
