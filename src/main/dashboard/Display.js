import React, { useContext } from "react";
import Country from "./Country";
import { context } from "../../store";
import Pagination from "../pagination/Pagination";
import { COUNTRIES_PER_PAGE } from "../../page-reducer";

function Display(props) {
  const { data, pages } = useContext(context);
  let countries;
  if (data && pages) {
    const from = COUNTRIES_PER_PAGE * (pages.currentPage - 1);
    const to = COUNTRIES_PER_PAGE * pages.currentPage;
    countries = data.slice(from, to);
  }

  return (
    <React.Fragment>
      <div className="main">
        {data &&
          countries &&
          countries.map((country, i) => {
            return <Country country={country} key={"country_" + i} />;
          })}
      </div>
      <Pagination />
    </React.Fragment>
  );
}

export default Display;
