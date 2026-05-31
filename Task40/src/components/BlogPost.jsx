import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BlogPost({
  slug,
  title,
  excerpt,
  date,
  author,
  readingTime,
  tags,
}) {
  const [likes, setLikes] = useState(0);
  const navigate = useNavigate();

  const handleOpen = useCallback(() => {
    navigate(`/blog/${slug}`);
  }, [navigate, slug]);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleOpen();
      }
    },
    [handleOpen]
  );

  const handleLike = useCallback((event) => {
    event.stopPropagation();
    setLikes((prev) => prev + 1);
  }, []);

  return (
    <article
      className="blog-card blog-card--interactive"
      role="button"
      tabIndex={0}
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
    >
      <div className="blog-content">
        <div className="blog-meta">
          <span>{date}</span>
          <span className="meta-separator">|</span>
          <span>{author}</span>
          <span className="meta-separator">|</span>
          <span>{readingTime}</span>
        </div>
        <h3 className="blog-title">{title}</h3>
        <p className="blog-excerpt">{excerpt}</p>
        <div className="tag-row">
          {tags.map((tag) => (
            <span key={`${slug}-${tag}`} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <button
        className="like-button"
        onClick={handleLike}
        type="button"
      >
        Лайк: {likes}
      </button>
    </article>
  );
}
