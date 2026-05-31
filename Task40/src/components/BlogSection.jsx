import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import BlogPost from './BlogPost';
import { blogPosts } from '../data/mockData';

export default function BlogSection() {
  const previewPosts = useMemo(() => blogPosts.slice(0, 3), []);

  return (
    <section className="section-container">
      <div className="section-heading">
        <h2 className="section-title">Blog</h2>
        <Link className="section-link" to="/blog">
          Всi пости
        </Link>
      </div>
      <div className="stack">
        {previewPosts.map((post) => (
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
        ))}
      </div>
    </section>
  );
}
