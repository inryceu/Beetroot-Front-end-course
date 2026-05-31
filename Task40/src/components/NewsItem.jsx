export default function NewsItem({ title, date, summary, category }) {
  return (
    <article className="news-card">
      <div className="news-header">
        <h4 className="news-title">{title}</h4>
        <span className="news-category">{category}</span>
      </div>
      <p className="news-summary">{summary}</p>
      <small className="news-date">{date}</small>
    </article>
  );
}
