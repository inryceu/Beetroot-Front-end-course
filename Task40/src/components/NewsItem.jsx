import React from "react";

export default function NewsItem({ title, date }) {
  return (
    <article className="news-card">
      <h4 className="news-title">{title}</h4>
      <small className="news-date">{date}</small>
    </article>
  );
}
