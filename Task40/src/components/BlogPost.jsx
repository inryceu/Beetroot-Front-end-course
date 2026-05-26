import React, { useState } from "react";

export default function BlogPost({ title, excerpt }) {
  const [likes, setLikes] = useState(0);

  return (
    <article className="blog-card">
      <div className="blog-content">
        <h3 className="blog-title">{title}</h3>
        <p className="blog-excerpt">{excerpt}</p>
      </div>
      <button
        className="like-button"
        onClick={() => setLikes(likes + 1)}
        type="button"
      >
        Лайк: {likes}
      </button>
    </article>
  );
}
