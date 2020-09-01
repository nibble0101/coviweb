import React, { useEffect, useState, useReducer } from "react";
import {json} from "d3";
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
    .then(data => {
        pageDispatch({ type: "set-pages", payload: data[0].length });
        setData(data[0]);
        setAggregateData(data[1]);
        setMapData(data[2]);
    }).catch(error => console.log(error.message));
  }, []);
  function currentPageHandler(e) {
    pageDispatch({ type: "set-current-page", payload: +e.target.value });
  }
  function nextChapterHandler(e) {
    const id = e.target.id;
    if (id === "next-page") {
      pageDispatch({ type: "set-next-page" });
    } else if (id === "next-chapter") {
      pageDispatch({ type: "set-next-chapter" });
    }
  }
  function previousChapterHandler(e) {
    const id = e.target.id;
    if (id === "previous-page") {
      pageDispatch({ type: "set-previous-page" });
    } else if (id === "previous-chapter") {
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
