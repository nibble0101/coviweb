import React, { useEffect, useState, useReducer } from "react";
import { json } from "d3";
import { paginationReducer } from "./page-reducer";

const urlCountries = "https://disease.sh/v2/countries";
const urlAggregate = "https://disease.sh/v2/all";
const urlMap = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const context = React.createContext();
function ContextProvider(props) {
  const [data, setData] = useState(null);
  const [pages, pageDispatch] = useReducer(paginationReducer, null);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [mapData, setMapData] = useState(null);
  const [aggregateData, setAggregateData] = useState(null);
  useEffect(() => {
    Promise.all([json(urlCountries), json(urlAggregate), json(urlMap)])
      .then((data) => {
        pageDispatch({ type: "SET_PAGES", payload: data[0].length });
        setData(data[0]);
        setAggregateData(data[1]);
        setMapData(data[2]);
      })
      .catch((error) => console.log(error.message));
  }, []);
  function currentPageHandler(e) {
    pageDispatch({ type: "SET_CURRENT_PAGE", payload: +e.target.value });
  }
  function nextChapterHandler(e) {
    const id = e.target.id;
    if (id === "next-page") {
      pageDispatch({ type: "SET_NEXT_PAGE" });
    } else if (id === "next-chapter") {
      pageDispatch({ type: "SET_NEXT_CHAPTER" });
    }
  }
  function previousChapterHandler(e) {
    const id = e.target.id;
    if (id === "previous-page") {
      pageDispatch({ type: "SET_PREVIOUS_PAGE" });
    } else if (id === "previous-chapter") {
      pageDispatch({ type: "SET_PREVIOUS_CHAPTER" });
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
      default:
        setActiveMenu("dashboard");
    }
  }

  return (
    <context.Provider
      value={{
        data,
        pages,
        activeMenu,
        mapData,
        aggregateData,
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
