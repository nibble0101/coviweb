import React, { useEffect, useState, useReducer } from "react";
import { paginationReducer } from "./page-reducer";

const url = "https://disease.sh/v2/countries";
const context = React.createContext();
function ContextProvider(props) {
  const [data, setData] = useState(null);
  const [pages, pageDispatch] = useReducer(paginationReducer, null);
  const [activeMenu, setActiveMenu] = useState("dashboard");
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
      pageDispatch({ type: "set-last-chapter" });
    } else if (id === "next") {
      pageDispatch({ type: "set-next-chapter" });
    }
  }
  function previousChapterHandler(e) {
    const id = e.target.id;
    if (id === "first") {
      pageDispatch({ type: "set-first-chapter" });
    } else if (id === "previous") {
      pageDispatch({ type: "set-previous-chapter" });
    }
  }

  function menuClickHandler(e) {
    const id = e.target.id;
    switch (id) {
      case "dashboard":
        setActiveMenu("dashboard");
        break;
      case "about":
        setActiveMenu("about");
        break;
      case "visualization":
        setActiveMenu("visualization");
        break;
      case "press":
        setActiveMenu("press");
        break;
    }
  }

  return (
    <context.Provider
      value={{
        data,
        pages,
        activeMenu,
        currentPageHandler,
        nextChapterHandler,
        previousChapterHandler,
        menuClickHandler,
      }}
    >
      {props.children}
    </context.Provider>
  );
}

export { context, ContextProvider };
