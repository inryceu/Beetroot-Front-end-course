import { useCallback, useMemo, useState } from 'react';
import BlogPost from '../components/BlogPost';
import { blogPosts } from '../data/mockData';

export default function BlogPage() {
  const [query, setQuery] = useState('');

  const handleQueryChange = useCallback((event) => {
    setQuery(event.target.value);
  }, []);

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return blogPosts;
    }

    return blogPosts.filter((post) => {
      const searchSource = [
        post.title,
        post.excerpt,
        post.author,
        post.tags.join(' '),
      ]
        .join(' ')
        .toLowerCase();
      return searchSource.includes(normalizedQuery);
    });
  }, [query]);

  return (
    <section className="section-container">
      <div className="page-header">
        <div>
          <h2 className="section-title">Blog</h2>
          <p className="page-subtitle">
            Останнi пости, добiрки та нотатки з курсу.
          </p>
        </div>
        <input
          className="search-input"
          type="search"
          value={query}
          onChange={handleQueryChange}
          placeholder="Пошук по статтям"
          aria-label="Пошук по статтям"
        />
      </div>
      <div className="stack">
        {filteredPosts.length ? (
          filteredPosts.map((post) => (
            <BlogPost
              key={post.id}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              author={post.author}
              readingTime={post.readingTime}
              tags={post.tags}
            />
          ))
        ) : (
          <p className="empty-state">
            Нiчого не знайдено. Спробуйте iнший запит.
          </p>
        )}
      </div>
    </section>
  );
}
