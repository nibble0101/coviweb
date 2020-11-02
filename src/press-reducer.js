const initialPressState = {
  page: 0,
  pageCount: null,
  articles: [],
  isLoading: false,
};

function pressReducer(state, action) {
  switch (action.type) {
    case "SET_ARTICLES":
      return {
        ...state,
        articles: [...state.articles, ...action.articles],
      };
    case "SET_PAGE":
      return { ...state, page: state.page + 1 };
    case "SET_TOTAL_PAGE_COUNT":
      return { ...state, pageCount: action.pageCount };
    case "SET_LOADING_FLAG":
      return { ...state, isLoading: action.isLoading };
    default:
      return { ...state };
  }
}

export { initialPressState, pressReducer };
