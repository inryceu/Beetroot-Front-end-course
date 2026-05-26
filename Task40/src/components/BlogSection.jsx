import React from 'react';
import BlogPost from './BlogPost';
import { blogPosts } from '../data/mockData';

export default function BlogSection() {
  return (
    <section className="section-container">
      <h2 className="section-title">Blog</h2>
      <div>
        {blogPosts.map((post) => (
          <BlogPost key={post.id} title={post.title} excerpt={post.excerpt} />
        ))}
      </div>
    </section>
  );
}