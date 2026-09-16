import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_ARTICLES } from '../data/blogData';
import { DOCTOR_INFO, CLINIC_INFO } from '../data/doctorData';

const BlogDetailPage = ({ onOpenAppointmentModal }) => {
  const { articleId } = useParams();
  const navigate = useNavigate();

  const article = BLOG_ARTICLES.find(
    (item) => item.id === articleId || item.categorySlug === articleId
  ) || BLOG_ARTICLES[0];

  const relatedArticles = BLOG_ARTICLES.filter((item) => item.id !== article.id).slice(0, 3);

  return (
    <div className="blog-detail-page">
      {/* Subpage Hero / Breadcrumbs */}
      <section className="subpage-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/blog">Blog & Health Guides</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{article.category}</span>
          </nav>

          <span className="section-badge teal">{article.category}</span>
          <h1 className="subpage-hero-title">{article.title}</h1>
          <p className="subpage-hero-sub">
            Published on {article.date} • {article.readTime} • Medically Reviewed by Dr. Shashikumar M S
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container">
        <div className="subpage-container">
          {/* Main Article Body Column */}
          <main className="article-full-content">
            <Link to="/blog" className="subpage-back-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to All Articles
            </Link>

            <div className="article-feature-image-wrap">
              <img
                src={article.image}
                alt={article.title}
                className="article-feature-img"
              />
            </div>

            {/* Author Credit Bar */}
            <div className="article-author-bar">
              <img
                src="/assets/images/dr-shashi-portrait.jpg"
                alt="Dr. Shashikumar M S"
                className="article-author-avatar"
              />
              <div className="article-author-meta">
                <span className="article-author-name-tag">{article.author}</span>
                <span className="article-author-title-tag">{article.authorRole} • Mysuru</span>
              </div>
            </div>

            {/* Lead Intro */}
            <div className="article-intro-lead">
              <p>{article.content.introduction}</p>
            </div>

            {/* Subsections */}
            <div className="article-body-section">
              {article.content.subheadings.map((sec, idx) => (
                <article key={idx} className="article-section-block">
                  <h2>{sec.title}</h2>
                  <p>{sec.body}</p>
                </article>
              ))}
            </div>

            {/* Key Clinical Takeaways Highlight */}
            <div className="article-takeaways-highlight">
              <div className="takeaways-highlight-title">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Key Clinical Takeaways & Doctor's Advice</span>
              </div>
              <ul className="takeaways-highlight-list">
                {article.content.takeaways.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '36px', paddingTop: '28px', borderTop: '1px solid var(--border-light)' }}>
              <button
                className="btn btn-primary"
                onClick={onOpenAppointmentModal}
              >
                Schedule Consultation with Dr. Shashi
              </button>
              <Link to="/blog" className="btn btn-secondary">
                Explore More Articles
              </Link>
            </div>
          </main>

          {/* Sticky Sidebar */}
          <aside className="subpage-sidebar">
            <div className="sidebar-consult-card">
              <div className="sidebar-doctor-mini">
                <img
                  src="/assets/images/dr-shashi-portrait.jpg"
                  alt="Dr. Shashikumar M S"
                  className="sidebar-doctor-img"
                />
                <div>
                  <div className="sidebar-doctor-name">Dr. Shashikumar M S</div>
                  <div className="sidebar-doctor-role">MBBS, MS (Ortho), Fellowship Arthroscopy</div>
                </div>
              </div>

              <h4 className="sidebar-card-title">Have Questions on this Condition?</h4>
              <p className="sidebar-card-desc">
                Get an accurate diagnosis, second opinion, or customized surgical treatment plan tailored to your physical goals.
              </p>

              <div className="sidebar-contact-details">
                <div className="sidebar-contact-row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{CLINIC_INFO.address.area}, Mysuru</span>
                </div>
                <div className="sidebar-contact-row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>{CLINIC_INFO.consultationTimings}</span>
                </div>
              </div>

              <button
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={onOpenAppointmentModal}
              >
                Book Priority Appointment
              </button>
            </div>

            {/* Related Articles Box */}
            <div className="sidebar-consult-card">
              <h4 className="sidebar-card-title" style={{ fontSize: '1.1rem', marginBottom: '16px' }}>
                Related Guides
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/blog/${rel.id}`}
                    style={{
                      display: 'block',
                      padding: '12px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--bg-subtle)',
                      transition: 'all 0.2s ease',
                      border: '1px solid var(--border-light)'
                    }}
                  >
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-teal)', fontWeight: '700' }}>
                      {rel.category}
                    </span>
                    <h5 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginTop: '4px', fontWeight: '700', lineHeight: 1.4 }}>
                      {rel.title}
                    </h5>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
