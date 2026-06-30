
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import PlayersPage from './pages/PlayersPage.jsx';
import FixturesPage from './pages/FixturesPage.jsx';
import ResultsPage from './pages/ResultsPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import NewsPage from './pages/NewsPage.jsx';
import SponsorsPage from './pages/SponsorsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/fixtures" element={<FixturesPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
              <p className="text-xl text-muted-foreground mb-8">Page not found</p>
              <a href="/" className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200">
                Back to home
              </a>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
