import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, Search, ArrowRight, Menu, X } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { SearchModal } from './SearchModal';

export const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setIsDrawerOpen } = useStore();

  return (
    <>
      <header style={headerStyle}>
        <div className="page-container" style={navContainerStyle}>
          {/* Brand Logo matching mockup */}
          <Link to="/" style={brandLinkStyle}>
            <img
              src="./assets/branding/prof-hootigan-logo.png"
              alt="Prof Hootigan"
              style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav style={desktopNavStyle}>
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

          {/* Right Action Buttons */}
          <div style={actionsStyle}>
            <button
              onClick={() => setIsSearchOpen(true)}
              style={searchBtnStyle}
              aria-label="Search comics"
              title="Search"
            >
              <Search size={20} color="var(--text-ink)" />
            </button>

            {/* Store Pill Button */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="pill-btn pill-btn-dark store-btn-desktop"
              style={{ padding: '9px 18px', gap: 8, fontSize: '0.92rem' }}
            >
              <ShoppingBag size={16} />
              <span>Store</span>
              <ArrowRight size={15} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle-btn"
              style={mobileToggleBtnStyle}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={mobileMenuContainerStyle}>
            <NavLink
              to="/"
              end
              onClick={() => setMobileMenuOpen(false)}
              style={mobileNavLinkStyle}
            >
              Home
            </NavLink>
            <NavLink
              to="/comics"
              onClick={() => setMobileMenuOpen(false)}
              style={mobileNavLinkStyle}
            >
              Comics
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              style={mobileNavLinkStyle}
            >
              Prof Hootigan
            </NavLink>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsDrawerOpen(true);
              }}
              className="pill-btn pill-btn-dark"
              style={{ width: 'fit-content', padding: '10px 18px', marginTop: 6 }}
            >
              <ShoppingBag size={16} />
              <span>Store</span>
              <ArrowRight size={15} />
            </button>
          </div>
        )}
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
        @media (max-width: 680px) {
          .store-btn-desktop {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
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
  justifyContent: 'space-between'
};

const brandLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
};

const desktopNavStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '32px'
};

const actionsStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '14px'
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

const mobileToggleBtnStyle = {
  display: 'none',
  padding: '6px',
  color: 'var(--text-ink)',
  cursor: 'pointer'
};

const mobileMenuContainerStyle = {
  position: 'absolute',
  top: 'var(--navbar-height)',
  left: 0,
  right: 0,
  backgroundColor: '#FFFFFF',
  borderBottom: '1px solid var(--border-card)',
  padding: '20px 24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  boxShadow: 'var(--shadow-md)'
};

const mobileNavLinkStyle = {
  fontSize: '1.05rem',
  fontWeight: 700,
  color: 'var(--text-ink)',
  textDecoration: 'none',
  padding: '6px 0'
};
