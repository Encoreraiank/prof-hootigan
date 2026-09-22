import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, Search, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { SearchModal } from './SearchModal';

export const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { setIsDrawerOpen } = useStore();

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

          {/* Navigation Links (Visible on both Desktop and Mobile, arranged properly) */}
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

          {/* Right Action Buttons: Search + Store (Replaces hamburger menu on mobile) */}
          <div style={actionsStyle} className="navbar-actions">
            <button
              onClick={() => setIsSearchOpen(true)}
              style={searchBtnStyle}
              className="navbar-search-btn"
              aria-label="Search comics"
              title="Search"
            >
              <Search size={18} color="var(--text-ink)" />
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
            padding: 0 16px !important;
          }
          .navbar-brand-logo {
            height: 38px !important;
          }
          .navbar-actions {
            gap: 10px !important;
          }
          .navbar-search-btn {
            width: 36px !important;
            height: 36px !important;
          }
          .navbar-store-btn {
            padding: 7px 14px !important;
            font-size: 0.84rem !important;
            gap: 6px !important;
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
  backgroundColor: 'rgba(248, 244, 236, 0.96)',
  backdropFilter: 'blur(8px)',
  borderBottom: '1px solid rgba(37, 35, 43, 0.08)',
  height: 'var(--navbar-height)',
  display: 'flex',
  alignItems: 'center'
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
  gap: '12px',
  flexShrink: 0
};

const searchBtnStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  color: 'var(--text-ink)',
  cursor: 'pointer'
};
