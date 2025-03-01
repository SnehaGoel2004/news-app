// Components/NewsItem.js
import React from "react";

function NewsItem({ title, desc, imageURL, newsUrl }) {
  return (
    <div className="news-item">
      <img src={imageURL} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href={newsUrl} target="_blank" rel="noopener noreferrer">Read More</a>
    </div>
  );
}

export default NewsItem;