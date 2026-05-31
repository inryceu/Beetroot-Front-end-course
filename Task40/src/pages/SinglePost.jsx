import { useCallback, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogPosts } from '../data/mockData';

export default function SinglePost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = useMemo(
    () => blogPosts.find((item) => item.slug === slug),
    [slug]
  );

  useEffect(() => {
    document.title = post ? `${post.title} | Blog` : 'Post not found';
  }, [post]);

  const handleBack = useCallback(() => {
    navigate('/blog');
  }, [navigate]);

  if (!post) {
    return (
      <section className="section-container single-post">
        <h2 className="section-title">Post not found</h2>
        <p className="page-subtitle">
          Посилання застарiло або запис було видалено.
        </p>
        <button className="primary-button" type="button" onClick={handleBack}>
          Повернутися до блогу
        </button>
      </section>
    );
  }

  return (
    <article className="section-container single-post">
      <div className="post-header">
        <div>
          <h2 className="post-title">{post.title}</h2>
          <div className="blog-meta">
            <span>{post.date}</span>
            <span className="meta-separator">|</span>
            <span>{post.author}</span>
            <span className="meta-separator">|</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
        <button className="secondary-button" type="button" onClick={handleBack}>
          До списку
        </button>
      </div>
      <p className="post-excerpt">{post.excerpt}</p>
      <div className="tag-row">
        {post.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="post-content">
        {post.content.map((paragraph, index) => (
          <p key={`${post.id}-${index}`} className="post-paragraph">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
