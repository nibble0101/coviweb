import React, { useEffect, useState, useReducer } from "react";
import { paginationReducer } from "./page-reducer";

const url = "https://disease.sh/v2/countries";
const context = React.createContext();
function ContextProvider(props) {
  const [data, setData] = useState(null);
  const [pages, pageDispatch] = useReducer(paginationReducer, null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        pageDispatch({ type: "set-pages", payload: data.length });
      })
      .catch((error) => error.message);
  }, []);
  function currentPageHandler(e) {
    pageDispatch({ type: "set-current-page", payload: +e.target.value });
  }
  function nextChapterHandler(e) {
    const id = e.target.id;
    if (id === "last") {
        pageDispatch({ type: "set-last-chapter"}); 
    } else if (id === "next") {
        pageDispatch({ type: "set-next-chapter"}); 
    }
  }
  function previousChapterHandler(e) {
    const id = e.target.id;
    if (id === "first") {
        pageDispatch({ type: "set-first-chapter"}); 
    } else if (id === "previous") {
        pageDispatch({ type: "set-previous-chapter"}); 
    }
  }
  return (
    <context.Provider value={{ data, pages, currentPageHandler, nextChapterHandler, previousChapterHandler }}>
      {props.children}
    </context.Provider>
  );
}

export { context, ContextProvider };
