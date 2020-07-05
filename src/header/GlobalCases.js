import React, { useContext } from "react";
import { context } from "../store";
import { format } from "d3";
import Zoom from "react-reveal/Zoom";

function GlobalCases(props) {
  const { aggregateData } = useContext(context);
  return (
    <Zoom>
      <div className = "global-cases-wrapper">
        <p className = "global-text">Global</p>
        {aggregateData && (
          <div className="global-cases">
            <div className="global">
              <span className="label">Cases:</span>{" "}
              <span className="figure">
                {aggregateData && format(",")(aggregateData.cases)}
              </span>
            </div>
            <div className="global">
              <span className="label">Deaths:</span>{" "}
              <span className="figure">
                {" "}
                {aggregateData && format(",")(aggregateData.deaths)}{" "}
              </span>
            </div>
            <div className="global">
              <span className="label">Recovered:</span>{" "}
              <span className="figure">
                {" "}
                {aggregateData && format(",")(aggregateData.recovered)}{" "}
              </span>
            </div>
            <div className="global">
              <span className="label">Population:</span>{" "}
              <span className="figure">
                {" "}
                {aggregateData && format(",")(aggregateData.population)}{" "}
              </span>
            </div>
          </div>
        )}
      </div>
    </Zoom>
  );
}

export default GlobalCases;
