import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, BookOpen, Smile, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const BottomNav = () => {
  const { setIsDrawerOpen, cartCount } = useStore();
  const location = useLocation();

  // Helper to check if current route matches
  const isComicsActive = location.pathname.startsWith('/comics');
  const isAboutActive = location.pathname === '/about';
  const isHomeActive = location.pathname === '/';

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile Bottom Navigation">
      <div className="bottom-nav-inner">
        {/* 1. Home Link */}
        <NavLink
          to="/"
          end
          className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
        >
          <div className="nav-icon-wrapper">
            <Home size={21} strokeWidth={isHomeActive ? 2.4 : 1.8} />
          </div>
          <span className="nav-label">Home</span>
        </NavLink>

        {/* 2. Comics Link */}
        <NavLink
          to="/comics"
          className={() => `bottom-nav-item ${isComicsActive ? 'active' : ''}`}
        >
          <div className="nav-icon-wrapper">
            <BookOpen size={21} strokeWidth={isComicsActive ? 2.4 : 1.8} />
          </div>
          <span className="nav-label">Comics</span>
        </NavLink>

        {/* 3. Prof Hootigan (About) Link */}
        <NavLink
          to="/about"
          className={() => `bottom-nav-item ${isAboutActive ? 'active' : ''}`}
        >
          <div className="nav-icon-wrapper">
            <Smile size={21} strokeWidth={isAboutActive ? 2.4 : 1.8} />
          </div>
          <span className="nav-label">About</span>
        </NavLink>

        {/* 4. Store Button */}
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="bottom-nav-item bottom-nav-btn"
          aria-label="Open Store"
        >
          <div className="nav-icon-wrapper store-icon-wrapper">
            <ShoppingBag size={21} strokeWidth={1.8} />
            {cartCount > 0 && <span className="bottom-nav-badge">{cartCount}</span>}
          </div>
          <span className="nav-label">Store</span>
        </button>
      </div>

      <style>{`
        .mobile-bottom-nav {
          display: none;
        }

        @media (max-width: 768px) {
          .mobile-bottom-nav {
            display: block;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 950;
            background: rgba(255, 255, 255, 0.88);
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            border-top: 1px solid rgba(37, 35, 43, 0.08);
            box-shadow: 0 -4px 20px rgba(37, 35, 43, 0.07);
            padding: 6px 16px;
            padding-bottom: calc(6px + env(safe-area-inset-bottom, 8px));
          }

          .bottom-nav-inner {
            display: flex;
            align-items: center;
            justify-content: space-around;
            max-width: 440px;
            margin: 0 auto;
          }

          .bottom-nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 3px;
            color: #7D7687;
            text-decoration: none;
            padding: 4px 12px;
            border-radius: 12px;
            transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
            position: relative;
            background: none;
            border: none;
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
          }

          .nav-icon-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 28px;
            height: 28px;
            transition: transform 0.18s ease;
          }

          .nav-label {
            font-size: 0.72rem;
            font-weight: 600;
            letter-spacing: 0.01em;
            line-height: 1;
            transition: color 0.18s ease;
          }

          /* Active State */
          .bottom-nav-item.active {
            color: var(--text-ink);
          }

          .bottom-nav-item.active .nav-icon-wrapper {
            color: var(--accent-coral);
            transform: translateY(-1px) scale(1.06);
          }

          .bottom-nav-item.active .nav-label {
            color: var(--text-ink);
            font-weight: 700;
          }

          .bottom-nav-item.active::after {
            content: '';
            position: absolute;
            bottom: -2px;
            width: 14px;
            height: 3px;
            background-color: var(--accent-coral);
            border-radius: 2px;
          }

          .bottom-nav-item:active {
            transform: scale(0.92);
          }

          .bottom-nav-badge {
            position: absolute;
            top: -2px;
            right: -6px;
            background-color: var(--accent-coral);
            color: #FFFFFF;
            font-size: 0.65rem;
            font-weight: 700;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1.5px solid #FFFFFF;
          }
        }
      `}</style>
    </nav>
  );
};
