import React from "react";
import { timeFormat } from "d3";
const url = "https://disease.sh";
function Footer(props) {
  const date = new Date();
  const year = date.getFullYear();
  const formatDateTime = timeFormat("%B %d, %Y  %H:%M:%S %p");
  const ref = React.useRef(formatDateTime(date));
  return (
    <footer className="footer">
      <div className="wrapper">
        <p className="footer-data-source">
          <span className="label"> Data Source </span>:{" "}
          <a href={url} target="_blank" rel="noreferrer noopener">
            {" "}
            NOVEL CoVID19 API{" "}
          </a>
        </p>
        <p className="footer-retrieval-date">
          {" "}
          <span className="label"> Retrieval Date</span>: {ref.current}
        </p>
        <p className="social-media">
          <span className="label">Share: </span>
          <a
            href="https://twitter.com/?lang=en"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-facebook" aria-hidden="true"></i>
          </a>
        </p>
      </div>
      <p className="footer-copyright">
        Copyright <span className="copyright-symbol"> {"\u00A9"} </span>{" "}
        <a
          href="https://github.com/nibble0101"
          target="_blank"
          rel="noreferrer noopener"
        >
          {" "}
          Joseph Mawa{" "}
        </a>{" "}
        {year > 2020 ? `2020 - ${year}` : year}
      </p>
    </footer>
  );
}

export default Footer;
