import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BLOG_ARTICLES } from '../data/blogData';

const Blog = ({ onOpenAppointmentModal }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const categories = [
    { label: 'All Articles', slug: 'all' },
    { label: 'Knee Care', slug: 'knee' },
    { label: 'Joint Replacement', slug: 'joint-replacement' },
    { label: 'Shoulder Care', slug: 'shoulder' },
    { label: 'Sports Medicine', slug: 'sports' },
  ];

  const filteredArticles = activeCategory === 'all'
    ? BLOG_ARTICLES
    : BLOG_ARTICLES.filter(item => item.categorySlug === activeCategory);

  return (
    <section className="section" id="blog">
      <div className="container">
        <div className="section-header">
          <span className="section-badge teal">PATIENT EDUCATION & WELLNESS</span>
          <h2 className="section-title">Orthopedic Care & Health Articles</h2>
          <p className="section-description">
            Evidence-based medical guides, joint preservation tips, and surgical recovery insights authored to help you make informed decisions about your movement.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="blog-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              className={`blog-filter-pill ${activeCategory === cat.slug ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.slug)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        <div className="blog-grid">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="blog-card"
              onClick={() => navigate(`/blog/${article.id}`)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => e.key === 'Enter' && navigate(`/blog/${article.id}`)}
              aria-label={`Read article: ${article.title}`}
              style={{ cursor: 'pointer' }}
            >
              <div className="blog-image-wrap">
                <img
                  src={article.image}
                  alt={article.title}
                  className="blog-img"
                  loading="lazy"
                />
                <span className="blog-category-tag">{article.category}</span>
              </div>

              <div className="blog-card-content">
                <div className="blog-meta-row">
                  <span className="blog-date">{article.date}</span>
                  <span className="blog-read-time">{article.readTime}</span>
                </div>

                <h3 className="blog-card-title">{article.title}</h3>
                <p className="blog-card-excerpt">{article.excerpt}</p>

                <div className="blog-card-footer">
                  <div className="blog-author-info">
                    <span className="blog-author-name">{article.author}</span>
                    <span className="blog-author-role">{article.authorRole}</span>
                  </div>
                  <Link
                    to={`/blog/${article.id}`}
                    className="blog-read-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Read Full Article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Articles Action */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/blog" className="btn btn-secondary">
            View All Patient Guides & Articles
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
