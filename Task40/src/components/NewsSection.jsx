import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import NewsItem from './NewsItem';
import { newsItems } from '../data/mockData';

export default function NewsSection() {
  const latestNews = useMemo(() => newsItems.slice(0, 3), []);

  return (
    <aside className="section-container">
      <div className="section-heading">
        <h2 className="section-title">News</h2>
        <Link className="section-link" to="/news">
          Всi новини
        </Link>
      </div>
      <div className="stack">
        {latestNews.map((news) => (
          <NewsItem
            key={news.id}
            title={news.title}
            date={news.date}
            summary={news.summary}
            category={news.category}
          />
        ))}
      </div>
    </aside>
  );
}
