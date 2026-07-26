import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import CanvasBackground from './components/CanvasBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InitialLoader from './components/InitialLoader';
import AuthModal from './components/AuthModal';
import SearchModal from './components/SearchModal';
import MaterialModal from './components/MaterialModal';

// Pages
import HomePage from './pages/HomePage';
import BoardDetailsPage from './pages/BoardDetailsPage';
import SubjectDetailsPage from './pages/SubjectDetailsPage';
import NoticesPage from './pages/NoticesPage';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AdminLoginPage from './pages/AdminLoginPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import StaffLoginPage from './pages/StaffLoginPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

function AppContent() {
  const { user } = useAuth();
  const [initialLoading, setInitialLoading] = useState(true);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Hide Navbar & Footer on Auth, Admin & Student Dashboard pages
  const isAuthOrDashboardPage = ['/login', '/signup', '/staff-login', '/admin', '/dashboard'].includes(location.pathname);

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-orange-600 selection:text-white bg-white">
      
      {/* 1. Initial Animated Splash Loader */}
      {initialLoading && (
        <InitialLoader onComplete={() => setInitialLoading(false)} />
      )}

      {/* Interactive Particle Background (Non-blocking) */}
      {!isAuthOrDashboardPage && <CanvasBackground />}

      {/* Sticky Glass Navbar (Hidden on Login/Signup/Staff-Login/Admin/Dashboard) */}
      {!isAuthOrDashboardPage && (
        <Navbar
          onOpenAuth={() => setAuthModalOpen(true)}
          onOpenSearch={() => setSearchModalOpen(true)}
        />
      )}

      {/* App Routes */}
      <main className="flex-1 relative z-10">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenAuth={() => setAuthModalOpen(true)}
                onOpenSearch={() => setSearchModalOpen(true)}
                onSelectMaterial={(item) => setSelectedMaterial(item)}
              />
            }
          />
          <Route
            path="/board/:boardId"
            element={
              <BoardDetailsPage
                onSelectMaterial={(item) => setSelectedMaterial(item)}
              />
            }
          />
          <Route
            path="/subject/:subjectId"
            element={
              <SubjectDetailsPage
                onSelectMaterial={(item) => setSelectedMaterial(item)}
              />
            }
          />
          <Route path="/notices" element={<NoticesPage />} />
          <Route
            path="/dashboard"
            element={
              <StudentDashboard
                onSelectMaterial={(item) => setSelectedMaterial(item)}
              />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Protected Admin Route: Admin Login Screen -> Admin Dashboard */}
          <Route
            path="/admin"
            element={user?.role === 'admin' ? <AdminDashboard /> : <AdminLoginPage />}
          />
          
          <Route path="/staff-login" element={<StaffLoginPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Footer (Hidden on Login/Signup/Staff-Login/Admin/Dashboard) */}
      {!isAuthOrDashboardPage && <Footer />}

      {/* Global Modals */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onOpenStaffLogin={() => navigate('/staff-login')}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectMaterial={(item) => setSelectedMaterial(item)}
      />

      <MaterialModal
        material={selectedMaterial}
        isOpen={!!selectedMaterial}
        onClose={() => setSelectedMaterial(null)}
      />

    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
