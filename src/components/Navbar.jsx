import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, Search, ArrowRight, Sun, Moon } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { useTheme } from '../context/ThemeContext';
import { SearchModal } from './SearchModal';

export const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { setIsDrawerOpen } = useStore();
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <header style={headerStyle} className="site-navbar">
        <div className="page-container navbar-inner-container" style={navContainerStyle}>
          {/* Brand Logo */}
          <Link to="/" style={brandLinkStyle} className="navbar-brand">
            <img
              src="./assets/branding/prof-hootigan-logo.png"
              alt="Prof Hootigan"
              className="navbar-brand-logo"
              style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>

          {/* Navigation Links (Visible on Desktop) */}
          <nav className="navbar-links" style={desktopNavStyle}>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? 'nav-item nav-active' : 'nav-item')}
            >
              Home
            </NavLink>
            <NavLink
              to="/comics"
              className={({ isActive }) => (isActive ? 'nav-item nav-active' : 'nav-item')}
            >
              Comics
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'nav-item nav-active' : 'nav-item')}
            >
              Prof Hootigan
            </NavLink>
          </nav>

          {/* Right Action Buttons: Search + Theme Toggle + Store */}
          <div style={actionsStyle} className="navbar-actions">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              style={iconBtnStyle}
              className="navbar-icon-btn navbar-search-btn"
              aria-label="Search comics"
              title="Search"
            >
              <Search size={19} color="var(--text-ink)" />
            </button>

            {/* Light / Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              style={iconBtnStyle}
              className="navbar-icon-btn navbar-theme-btn"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun size={20} color="#FBC02D" strokeWidth={2.2} />
              ) : (
                <Moon size={19} color="var(--text-ink)" strokeWidth={2} />
              )}
            </button>

            {/* Store Pill Button */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="pill-btn pill-btn-dark navbar-store-btn"
              aria-label="Open Store"
            >
              <ShoppingBag size={15} />
              <span>Store</span>
              <ArrowRight size={14} className="store-arrow-icon" />
            </button>
          </div>
        </div>
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <style>{`
        .nav-item {
          position: relative;
          color: var(--text-ink);
          font-weight: 700;
          font-size: 1.02rem;
          padding: 6px 2px;
          text-decoration: none;
          transition: color 0.15s ease;
          white-space: nowrap;
        }
        .nav-item:hover {
          color: var(--accent-coral);
        }
        .nav-active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 3px;
          background-color: var(--accent-coral);
          border-radius: 4px;
        }
        .navbar-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: transparent;
          cursor: pointer;
          transition: transform 0.18s ease, background-color 0.18s ease;
        }
        .navbar-icon-btn:hover {
          background-color: var(--border-subtle);
          transform: scale(1.08);
        }
        .navbar-store-btn {
          padding: 9px 18px;
          gap: 7px;
          font-size: 0.92rem;
        }
        @media (max-width: 768px) {
          .navbar-links {
            display: none !important;
          }
          .navbar-inner-container {
            padding: 0 14px !important;
          }
          .navbar-brand-logo {
            height: 36px !important;
          }
          .navbar-actions {
            gap: 8px !important;
          }
          .navbar-icon-btn {
            width: 34px !important;
            height: 34px !important;
          }
          .navbar-store-btn {
            padding: 6px 12px !important;
            font-size: 0.82rem !important;
            gap: 5px !important;
          }
        }
      `}</style>
    </>
  );
};

const headerStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 900,
  backgroundColor: 'var(--navbar-bg)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  borderBottom: '1px solid var(--border-subtle)',
  height: 'var(--navbar-height)',
  display: 'flex',
  alignItems: 'center',
  transition: 'background-color 0.25s ease, border-color 0.25s ease'
};

const navContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%'
};

const brandLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  flexShrink: 0
};

const desktopNavStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '28px'
};

const actionsStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  flexShrink: 0
};

const iconBtnStyle = {
  border: 'none',
  padding: 0
};
