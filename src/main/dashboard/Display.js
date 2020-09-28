import React, { useContext, useState } from "react";
import Country from "./Country";
import { context } from "../../store";
import Pagination from "../pagination/Pagination";
import { COUNTRIES_PER_PAGE } from "../../page-reducer";

function Display(props) {
  const { data, pages } = useContext(context);
  const [query, setQuery] = useState("");
  const queryHandle = (e) => {
    setQuery(e.target.value);
  };
  let countries, filteredCountries;
  if (data && pages) {
    const from = COUNTRIES_PER_PAGE * (pages.currentPage - 1);
    const to = COUNTRIES_PER_PAGE * pages.currentPage;
    countries = data.slice(from, to);
  }
  if (!countries) return null;
  if (query) {
    filteredCountries = data.filter((country) => {
      const regx = new RegExp("^" + query, "mig");
      return regx.test(country.country);
    });
  }
  return (
    <React.Fragment>
      <div>
        <span>
          <i class="fas fa-search"></i>
        </span>
        <input
          type="text"
          value={query}
          onChange={queryHandle}
          placeholder="Search"
        />
        <span>
          <i class="fas fa-times-circle"></i>
        </span>
      </div>
      <div className="main">
        {query
          ? filteredCountries.map((country, i) => {
              return <Country country={country} key={Math.random()} />;
            })
          : countries.map((country, i) => {
              return <Country country={country} key={Math.random()} />;
            })}
      </div>
      {!query && <Pagination />}
    </React.Fragment>
  );
}

export default Display;
