import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_ARTICLES } from '../data/blogData';

const BlogPage = ({ onOpenAppointmentModal }) => {
  const [activeCategory, setActiveCategory] = useState('all');

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
    <div className="blog-archive-page">
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Blog & Patient Education</span>
          </nav>

          <span className="section-badge teal">PATIENT EDUCATION & WELLNESS</span>
          <h1 className="subpage-hero-title">Orthopedic Guides & Medical Insights</h1>
          <p className="subpage-hero-sub">
            In-depth clinical articles, joint preservation strategies, and postoperative recovery recommendations authored by Dr. Shashikumar M S (Consultant Orthopedic Surgeon).
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="section">
        <div className="container">
          {/* Category Filter Pills */}
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

          {/* Articles Grid */}
          <div className="blog-grid">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.id}`}
                className="blog-card"
                style={{ textDecoration: 'none', color: 'inherit' }}
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

                  <h2 className="blog-card-title">{article.title}</h2>
                  <p className="blog-card-excerpt">{article.excerpt}</p>

                  <div className="blog-card-footer">
                    <div className="blog-author-info">
                      <span className="blog-author-name">{article.author}</span>
                      <span className="blog-author-role">{article.authorRole}</span>
                    </div>
                    <span className="blog-read-link">
                      Read Full Article
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Consultation Banner */}
          <div className="appointment-cta-card" style={{ marginTop: '64px' }}>
            <div className="appointment-cta-content">
              <span className="section-badge teal">DIRECT DOCTOR CONSULTATION</span>
              <h3 className="appointment-cta-title" style={{ fontSize: '2rem' }}>
                Need expert advice tailored to your joint symptoms?
              </h3>
              <p className="appointment-cta-description">
                Book a face-to-face clinical evaluation with Dr. Shashikumar M S at our modern clinic in Vijayanagar 1st Stage, Mysuru.
              </p>
              <button
                className="btn btn-primary btn-lg"
                onClick={onOpenAppointmentModal}
              >
                Schedule Appointment Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
