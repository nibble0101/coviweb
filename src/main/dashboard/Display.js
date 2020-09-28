import React, { useContext, useState } from "react";
import Country from "./Country";
import { context } from "../../store";
import Pagination from "../pagination/Pagination";
import { COUNTRIES_PER_PAGE } from "../../page-reducer";

function Display(props) {
  const { data, pages } = useContext(context);
  const [query, setQuery] = useState("");
  let countries;
  if (data && pages) {
    const from = COUNTRIES_PER_PAGE * (pages.currentPage - 1);
    const to = COUNTRIES_PER_PAGE * pages.currentPage;
    countries = data.slice(from, to);
  }
  if (!countries) return null;
  return (
    <React.Fragment>
      <div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="main">
        {countries.map((country, i) => {
          return <Country country={country} key={Math.random()} />;
        })}
      </div>
      <Pagination />
    </React.Fragment>
  );
}

export default Display;
