import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Navbar   from './components/Navbar/Navbar';
import Footer   from './components/Footer/Footer';
import TopBar   from './components/TopBar/TopBar';

import Home         from './pages/Home/Home';
import About        from './pages/About/About';
import Services     from './pages/Services/Services';
import ServiceDetail from './pages/Services/ServiceDetail';
import Industries   from './pages/Industries/Industries';
import Projects     from './pages/Projects/Projects';
import Capabilities from './pages/Capabilities/Capabilities';
import Clients      from './pages/Clients/Clients';
import Contact      from './pages/Contact/Contact';
import NotFound     from './pages/NotFound/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [pathname]);
  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"                element={<Home />} />
          <Route path="/about"           element={<About />} />
          <Route path="/services"        element={<Services />} />
          <Route path="/services/:slug"  element={<ServiceDetail />} />
          <Route path="/industries"      element={<Industries />} />
          <Route path="/projects"        element={<Projects />} />
          <Route path="/capabilities"    element={<Capabilities />} />
          <Route path="/clients"         element={<Clients />} />
          <Route path="/contact"         element={<Contact />} />
          <Route path="*"               element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
