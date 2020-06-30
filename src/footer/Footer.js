import React from "react";
const url = "https://disease.sh";
function Footer(props) {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <p className="footer-data-source">
        Data Source: <a href={url}> NOVEL CoVID19 API </a>
      </p>
      <p className="footer-retrieval-date">
        Retrieval Date: {date.toString()}
      </p>
      <p className="footer-copyright">
        Copyright {"\u00A9"} Joe Nibble {year > 2020 ? `2020 - ${year}` : year}
      </p>
    </footer>
  );
}

export default Footer;