import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext';
import { SeedsProvider } from './context/SeedsContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { StoreDrawer } from './components/StoreDrawer';
import { Home } from './pages/Home';
import { Comics } from './pages/Comics';
import { ComicReader } from './pages/ComicReader';
import { ProfHootigan } from './pages/ProfHootigan';
import { Store } from './pages/Store';

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function App() {
  return (
    <ThemeProvider>
      <StoreProvider>
        <SeedsProvider>
          <Router>
            <ScrollToTop />
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/comics" element={<Comics />} />
                <Route path="/comics/:id" element={<ComicReader />} />
                <Route path="/about" element={<ProfHootigan />} />
                <Route path="/store" element={<Store />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <Footer />
            <BottomNav />
            <StoreDrawer />
          </Router>
        </SeedsProvider>
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;
