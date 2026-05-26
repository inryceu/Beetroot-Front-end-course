import React from 'react';
import NewsItem from './NewsItem';
import { newsItems } from '../data/mockData';

export default function NewsSection() {
  return (
    <aside className="section-container">
      <h2 className="section-title">News</h2>
      <div>
        {newsItems.map((news) => (
          <NewsItem key={news.id} title={news.title} date={news.date} />
        ))}
      </div>
    </aside>
  );
}