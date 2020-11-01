const initialPressState = {page: 0, articles: []};

function pressReducer(state, action) {
    switch(action.type){
       case "SET_ARTICLES":
           return {...state, articles: [...state.articles, ...action.articles]};
       case "SET_PAGE":
           return {...state, page: state.page + 1};
       default:
           return {...state};
    }
};

export {initialPressState, pressReducer};