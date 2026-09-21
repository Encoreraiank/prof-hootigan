import React from 'react';
import { useLocation } from 'react-router-dom';

export const Footer = () => {
  const { pathname } = useLocation();
  const isComics = pathname.startsWith('/comics');

  return (
    <footer style={footerStyle} className="site-footer">
      <div className="page-container">
        <div style={footerDividerStyle} className="footer-divider" />

        <div style={footerContentStyle} className="footer-content">
          {/* Left copyright and motto */}
          <div style={brandColStyle} className="footer-brand-col">
            <p style={copyrightStyle} className="footer-copyright">© 2025 Prof Hootigan</p>
            <p style={mottoStyle} className="footer-motto">Small Stories. Big Tomorrows.</p>
          </div>

          {/* Center Socials */}
          <div style={socialsColStyle} className="footer-socials-col">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
              aria-label="Instagram"
              title="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <span style={dividerPipeStyle}>|</span>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
              aria-label="YouTube"
              title="YouTube"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <span style={dividerPipeStyle}>|</span>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
              aria-label="X"
              title="X"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

          {/* Right handwritten thanks with paw prints */}
          <div style={thanksColStyle} className="footer-thanks-col">
            <svg width="28" height="22" viewBox="0 0 48 38" fill="#D5CBBF" style={{ opacity: 0.9 }}>
              <ellipse cx="24" cy="26" rx="8" ry="7" />
              <circle cx="12" cy="14" r="4" />
              <circle cx="20" cy="8" r="4" />
              <circle cx="28" cy="8" r="4" />
              <circle cx="36" cy="14" r="4" />
            </svg>
            <div style={thanksTextStyle} className="footer-thanks-text">
              <span>{isComics ? 'Thanks' : 'Thanks'}</span>
              <span>{isComics ? 'for reading! ♡' : 'for being here. ♡'}</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .site-footer {
            padding-top: 20px !important;
            padding-bottom: 24px !important;
          }
          .footer-divider {
            margin-bottom: 16px !important;
          }
          .footer-content {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 14px !important;
          }
          .footer-brand-col {
            align-items: center !important;
            text-align: center !important;
          }
          .footer-copyright {
            font-size: 0.88rem !important;
          }
          .footer-motto {
            font-size: 0.78rem !important;
          }
          .footer-thanks-text {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: 'var(--bg-cream)',
  paddingTop: '32px',
  paddingBottom: '44px',
  marginTop: 'auto'
};

const footerDividerStyle = {
  height: '1px',
  backgroundColor: 'rgba(37, 35, 43, 0.1)',
  marginBottom: '28px'
};

const footerContentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '20px'
};

const brandColStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2px'
};

const copyrightStyle = {
  fontWeight: 700,
  fontSize: '0.94rem',
  color: 'var(--text-ink)',
  fontFamily: 'var(--font-display)',
  margin: 0
};

const mottoStyle = {
  fontSize: '0.86rem',
  color: 'var(--text-muted)',
  margin: 0
};

const socialsColStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
};

const socialLinkStyle = {
  color: 'var(--text-ink)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.15s ease, color 0.15s ease'
};

const dividerPipeStyle = {
  color: 'rgba(37, 35, 43, 0.2)',
  fontSize: '1.2rem',
  fontWeight: 300
};

const thanksColStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
};

const thanksTextStyle = {
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'var(--font-hand)',
  fontSize: '1.3rem',
  lineHeight: '1.05',
  color: '#34313B',
  borderBottom: '2px solid #34313B',
  paddingBottom: '2px'
};
