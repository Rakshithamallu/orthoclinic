import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CLINIC_INFO } from '../data/doctorData';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Treatments', path: '/treatments' },
  { label: 'Conditions', path: '/conditions' },
  { label: 'Facilities', path: '/facilities' },
  { label: 'Research', path: '/research' },
  { label: 'Blog', path: '/blog' },
  { label: 'FAQs', path: '/faqs' },
  { label: 'Contact', path: '/contact' },
];

const DESKTOP_PRIMARY_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Treatments', path: '/treatments' },
];

const DESKTOP_SECONDARY_LINKS = [
  { label: 'FAQs', path: '/faqs' },
  { label: 'Contact', path: '/contact' },
];

const Header = ({ onOpenAppointmentModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'conditions' | 'research' | null
  const conditionsRef = useRef(null);
  const researchRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      const inConditions = conditionsRef.current && conditionsRef.current.contains(e.target);
      const inResearch = researchRef.current && researchRef.current.contains(e.target);
      if (!inConditions && !inResearch) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route navigation
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isConditionsActive = location.pathname.startsWith('/conditions') || location.pathname.startsWith('/facilities');
  const isResearchActive = location.pathname.startsWith('/research') || location.pathname.startsWith('/blog');

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          {/* Brand Logo */}
          <Link to="/" className="brand-link" aria-label="Dr. Shashi's Ortho Clinic Homepage" onClick={closeMobileMenu}>
            <div className="brand-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 8v8"></path>
                <path d="M8 12h8"></path>
              </svg>
            </div>
            <div className="brand-text">
              <div className="brand-title">
                Dr. SHASHI'S <span>ORTHO CLINIC</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {DESKTOP_PRIMARY_LINKS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item-link ${isActive(item.path) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}

            {/* Conditions & Facilities Dropdown (Desktop Only) */}
            <div
              className={`nav-dropdown ${activeDropdown === 'conditions' ? 'open' : ''} ${isConditionsActive ? 'active' : ''}`}
              ref={conditionsRef}
              onMouseEnter={() => setActiveDropdown('conditions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`nav-item-link nav-dropdown-btn ${isConditionsActive ? 'active' : ''}`}
                onClick={() => setActiveDropdown(prev => prev === 'conditions' ? null : 'conditions')}
                aria-expanded={activeDropdown === 'conditions'}
                aria-haspopup="true"
              >
                <span>Conditions & Facilities</span>
                <svg
                  className="nav-dropdown-chevron"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              <div className="nav-dropdown-menu">
                <Link
                  to="/conditions"
                  className={`nav-dropdown-item ${isActive('/conditions') ? 'active' : ''}`}
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="nav-dropdown-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="nav-dropdown-text">
                    <span className="nav-dropdown-title">Conditions Treated</span>
                    <span className="nav-dropdown-desc">Knee pain, shoulder injuries, fractures & arthritis</span>
                  </div>
                </Link>

                <div className="nav-dropdown-divider" />

                <Link
                  to="/facilities"
                  className={`nav-dropdown-item ${isActive('/facilities') ? 'active' : ''}`}
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="nav-dropdown-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="12" y1="8" x2="12" y2="16"></line>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  </div>
                  <div className="nav-dropdown-text">
                    <span className="nav-dropdown-title">Clinic Facilities</span>
                    <span className="nav-dropdown-desc">Modular OT, robotic navigation & imaging</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Research  Dropdown (Desktop Only) */}
            <div
              className={`nav-dropdown ${activeDropdown === 'research' ? 'open' : ''} ${isResearchActive ? 'active' : ''}`}
              ref={researchRef}
              onMouseEnter={() => setActiveDropdown('research')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`nav-item-link nav-dropdown-btn ${isResearchActive ? 'active' : ''}`}
                onClick={() => setActiveDropdown(prev => prev === 'research' ? null : 'research')}
                aria-expanded={activeDropdown === 'research'}
                aria-haspopup="true"
              >
                <span>Research</span>
                <svg
                  className="nav-dropdown-chevron"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              <div className="nav-dropdown-menu">
                <Link
                  to="/research"
                  className={`nav-dropdown-item ${isActive('/research') ? 'active' : ''}`}
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="nav-dropdown-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                  </div>
                  <div className="nav-dropdown-text">
                    <span className="nav-dropdown-title">Research & Publications</span>
                    <span className="nav-dropdown-desc">Clinical papers, surgical studies & trials</span>
                  </div>
                </Link>

                <div className="nav-dropdown-divider" />

                <Link
                  to="/blog"
                  className={`nav-dropdown-item ${isActive('/blog') ? 'active' : ''}`}
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="nav-dropdown-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <div className="nav-dropdown-text">
                    <span className="nav-dropdown-title">Orthopedic Blog</span>
                    <span className="nav-dropdown-desc">Patient health guides, recovery & care tips</span>
                  </div>
                </Link>
              </div>
            </div>

            {DESKTOP_SECONDARY_LINKS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item-link ${isActive(item.path) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Elements */}
          <div className="header-actions">
            <a
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="header-phone-pill"
              title="Direct Clinic Phone"
            >
              <svg className="header-phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+91-6361446411</span>
            </a>

            <button
              className="btn btn-primary btn-sm"
              onClick={onOpenAppointmentModal}
              id="header-book-btn"
            >
              Book Appointment
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className={`mobile-toggle-btn ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="mobile-toggle-line"></span>
              <span className="mobile-toggle-line"></span>
              <span className="mobile-toggle-line"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-nav-list">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-nav-item ${isActive(item.path) ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <span>{item.label}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Link>
          ))}
        </div>

        <div className="mobile-drawer-footer">
          <button
            className="btn btn-primary"
            onClick={() => {
              closeMobileMenu();
              onOpenAppointmentModal();
            }}
          >
            Book Appointment
          </button>
          <a
            href={`tel:${CLINIC_INFO.phoneClean}`}
            className="btn btn-secondary"
            onClick={closeMobileMenu}
          >
            Call +91-6361446411
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
