import React from "react";
import {timeFormat} from "d3";
const url = "https://disease.sh";
function Footer(props) {
  const date = new Date();
  const year = date.getFullYear();
  const formatDateTime = timeFormat("%B %d, %Y  %H:%M:%S %p");
  return (
    <footer className="footer">
      <p className="footer-data-source">
        Data Source: <a href={url}> NOVEL CoVID19 API </a>
      </p>
      <p className="footer-retrieval-date">
        Retrieval Date: {formatDateTime(date)}
      </p>
      <p className="footer-copyright">
        Copyright {"\u00A9"} Joe Nibble {year > 2020 ? `2020 - ${year}` : year}
      </p>
    </footer>
  );
}

export default Footer;