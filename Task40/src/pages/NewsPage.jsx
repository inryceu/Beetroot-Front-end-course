import { useCallback, useMemo, useState } from 'react';
import NewsItem from '../components/NewsItem';
import { newsItems } from '../data/mockData';

export default function NewsPage() {
  const categories = useMemo(() => {
    const unique = new Set(newsItems.map((item) => item.category));
    return ['Усi', ...unique];
  }, []);
  const [activeCategory, setActiveCategory] = useState(categories[0] || 'Усi');

  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
  }, []);

  const filteredNews = useMemo(() => {
    if (activeCategory === 'Усi') {
      return newsItems;
    }
    return newsItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="section-container">
      <div className="page-header">
        <div>
          <h2 className="section-title">News</h2>
          <p className="page-subtitle">
            Оперативнi оновлення та подiї з фронтенд-спiльноти.
          </p>
        </div>
      </div>
      <div className="filter-row" role="tablist" aria-label="Фiльтр новин">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-button${
              activeCategory === category ? ' is-active' : ''
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="stack">
        {filteredNews.map((news) => (
          <NewsItem
            key={news.id}
            title={news.title}
            date={news.date}
            summary={news.summary}
            category={news.category}
          />
        ))}
      </div>
    </section>
  );
}
