import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Stylesheets
import './styles/global.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/sections.css';
import './styles/cards.css';
import './styles/modal.css';
import './styles/blog.css';
import './styles/pages.css';
import './styles/loading-screen.css';
import './styles/animations.css';
import './styles/social-reels.css';
import './styles/clinical-excellence.css';
import './styles/clinic-showcase.css';
import './styles/responsive.css';

// Components
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import BackToTop from './components/BackToTop';
import AppointmentModal from './components/AppointmentModal';
import ErrorBoundary from './components/ErrorBoundary';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import TreatmentsPage from './pages/TreatmentsPage';
import TreatmentDetailPage from './pages/TreatmentDetailPage';
import ConditionsPage from './pages/ConditionsPage';
import ConditionDetailPage from './pages/ConditionDetailPage';
import FacilitiesPage from './pages/FacilitiesPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import SpecialtyDetailPage from './pages/SpecialtyDetailPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const handleOpenAppointmentModal = () => {
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
  };

  return (
    <Router>
      <ErrorBoundary>
        <div className="clinic-app-root">
          {/* Sainik Hospital-style Minimal Elegant Loading Screen */}
          {isLoading && (
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          )}

          {/* Scroll Progress Bar at the Top */}
          <ScrollProgress />

          {/* Scroll to top on route navigation */}
          <ScrollToTop />

          {/* Header & Sticky Navigation */}
          <Header onOpenAppointmentModal={handleOpenAppointmentModal} />

          {/* Dynamic Route Pages */}
          <Routes>
            <Route path="/" element={<Home onOpenAppointmentModal={handleOpenAppointmentModal} />} />
            <Route path="/about" element={<AboutPage onOpenAppointmentModal={handleOpenAppointmentModal} />} />
            <Route path="/treatments" element={<TreatmentsPage onOpenAppointmentModal={handleOpenAppointmentModal} />} />
            <Route path="/treatments/:categoryId" element={<TreatmentDetailPage onOpenAppointmentModal={handleOpenAppointmentModal} />} />
            <Route path="/specialties/:specialtyId" element={<SpecialtyDetailPage onOpenAppointmentModal={handleOpenAppointmentModal} />} />
            <Route path="/specialties" element={<SpecialtyDetailPage onOpenAppointmentModal={handleOpenAppointmentModal} />} />
            <Route path="/conditions" element={<ConditionsPage onOpenAppointmentModal={handleOpenAppointmentModal} />} />
            <Route path="/conditions/:conditionId" element={<ConditionDetailPage onOpenAppointmentModal={handleOpenAppointmentModal} />} />
            <Route path="/facilities" element={<FacilitiesPage onOpenAppointmentModal={handleOpenAppointmentModal} />} />
            <Route path="/blog" element={<BlogPage onOpenAppointmentModal={handleOpenAppointmentModal} />} />
            <Route path="/blog/:articleId" element={<BlogDetailPage onOpenAppointmentModal={handleOpenAppointmentModal} />} />
            <Route path="/faqs" element={<FaqPage onOpenAppointmentModal={handleOpenAppointmentModal} />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all route */}
            <Route path="*" element={<Home onOpenAppointmentModal={handleOpenAppointmentModal} />} />
          </Routes>

          {/* Footer */}
          <Footer onOpenAppointmentModal={handleOpenAppointmentModal} />

          {/* Floating Action Elements */}
          <FloatingActions />
          <BackToTop />

          {/* Appointment Booking Modal */}
          <AppointmentModal
            isOpen={isAppointmentModalOpen}
            onClose={handleCloseAppointmentModal}
          />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
