import React from "react";

function Image(props) {
  const { url, alt, attribution } = props.image;
  return (
    <div className="image-section">
      <h1>
        About <span className="covid-text">COVID-19</span>
      </h1>
      <img src={url} alt={alt} />
      <p className="image-credit">
        Photo Credit:{" "}
        <a
          href={attribution.url}
          target="__blank"
          dangerouslySetInnerHTML={{ __html: attribution.text + "&#128279;" }}
        />
      </p>
    </div>
  );
}

export default Image;
