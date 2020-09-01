import React from "react";
import Fade from "react-reveal/Fade";
import { format } from "d3";

function Country(props) {
  const { country } = props;
  return (
    <Fade>
      <div className="country">
        <p className="heading">
          <span>
            <img
              src={country.countryInfo.flag}
              alt="Country flag"
              width="100px"
            />
          </span>
          <span className="country-name">{country.country}</span>
        </p>

        <p className="confirmed">
          <span className="label">Confirmed cases: </span>{" "}
          <span className="number">{format(",")(country.cases)}</span>
        </p>
        <p className="deaths">
          <span className="label">Deaths: </span>{" "}
          <span className="number">{format(",")(country.deaths)}</span>
        </p>
        <p className="recovered">
          <span className="label">Recovered: </span>{" "}
          <span className="number">{format(",")(country.recovered)}</span>
        </p>
        <p className="population">
          <span className="label">Population: </span>{" "}
          <span className="number">{format(",")(country.population)}</span>
        </p>
      </div>
    </Fade>
  );
}
export default Country;
