import React, { useEffect, useState, useReducer } from "react";
import {json} from "d3";
import { paginationReducer } from "./page-reducer";
// import key from "./main/press/api-key";

const urlPress = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=health&fq=headline:(\"covid-19\")&api-key=";
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
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    Promise.all([json(urlCountries), json(urlAggregate), json(urlMap), json(urlPress + API_KEY)])
    .then(data => {
        pageDispatch({ type: "set-pages", payload: data[0].length });
        setData(data[0]);
        setAggregateData(data[1]);
        setMapData(data[2]);
        setArticles(data[3].response)
    }).catch(error => console.log(error.message));
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
        mapData,
        aggregateData,
        articles,
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
