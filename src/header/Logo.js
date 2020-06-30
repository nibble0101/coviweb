import React from "react";
const url =
  "https://cdn.pixabay.com/photo/2020/03/14/09/39/virus-4930122_960_720.png";
function Logo(props) {
  return (
    <div className="logo">
      <img src={url} alt="COVID-19" width="100px" />
      <span>
        covi<span className="web-text">WEB</span>
      </span>
    </div>
  );
}
export default Logo;
