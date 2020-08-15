import React from "react";

function LoadMoreArticles(props) {
  return (
    <div className="load-more-articles">
      <button onClick = {props.pageHandle}> more articles... </button>
    </div>
  );
}


export default LoadMoreArticles;