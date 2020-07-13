import React from "react";
import { timeFormat } from "d3";
const url = "https://www.nytimes.com/";
const fallBackImage = "https://cdn.pixabay.com/photo/2020/03/08/23/23/coronavirus-4914026_960_720.jpg"
function NewYorkTimes(props) {
  const formatDateTime = timeFormat("%B %d, %Y  %H:%M:%S %p");
  const {multimedia } = props.article
  const fullUrl = multimedia.length ? url + multimedia[0].url: fallBackImage
  return (
    <div className="new-york-times">
      <h2 className="article-title">{props.article.headline.print_headline}</h2>
      <div className="article">
        <p>
          <img src={fullUrl} alt="Covid" />
        </p>
        <p className="paragraph">
          {props.article.lead_paragraph}
          <span>
            <a
              href={props.article.web_url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              Full Article New York Times &#128279;
            </a>
          </span>
        </p>
      </div>
      <p className="article-source">
        Source:{" "}
        <a href={url} target="_blank" rel="noreferrer noopener">
          {" "}
          {props.article.source}
        </a>
      </p>
      <p className="publication-date">
        Published on:
        <span>
          {formatDateTime(new Date(Date.parse(props.article.pub_date)))}
        </span>
      </p>
    </div>
  );
}

export default NewYorkTimes;
