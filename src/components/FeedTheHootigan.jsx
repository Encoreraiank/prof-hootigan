import React, { useState } from 'react';
import { useSeeds } from '../context/SeedsContext';

export const FeedTheHootigan = ({ compact = false }) => {
  const { seedCount, userFedToday, feedSeeds } = useSeeds();
  const [justFed, setJustFed] = useState(false);

  const handleFeed = (e) => {
    feedSeeds(5, e);
    setJustFed(true);
    setTimeout(() => setJustFed(false), 800);
  };

  return (
    <section className="feed-hootigan-section" style={sectionContainerStyle}>
      <div style={contentGridStyle}>
        {/* Left Column: Text & Action */}
        <div style={textColStyle}>
          <span style={categoryBadgeStyle}>SUPPORT</span>
          <div style={headerRowStyle}>
            <h2 style={headingStyle}>Feed the Hootigan</h2>
            <span style={{ color: 'var(--primary-lavender)', fontSize: '1.4rem' }}>彡</span>
          </div>

          <p style={descStyle}>
            If you enjoy the comics, you can support my work with a few pumpkin seeds. It helps me keep creating more stories, characters and brighter tomorrows.
          </p>

          <div style={actionRowStyle}>
            <button
              onClick={handleFeed}
              className={`pill-btn pill-btn-coral feed-btn-hover ${justFed ? 'feed-btn-pressed' : ''}`}
              style={feedBtnStyle}
            >
              <span style={{ fontSize: '1.2rem' }}>🎃</span>
              <span>Send Some Seeds</span>
              <span style={{ fontWeight: 400 }}>→</span>
            </button>
          </div>

          <p style={subtextNoteStyle}>
            Small support. A brighter tomorrow. ♡
          </p>
        </div>

        {/* Right Column: High-Res Illustration */}
        <div style={illusColStyle}>
          <div style={illusCardStyle}>
            <img
              src="./assets/characters/feed-the-hootigan.png"
              alt="Feed the Hootigan with pumpkin seeds"
              style={bowlImgStyle}
            />
          </div>
        </div>
      </div>

      <style>{`
        .feed-btn-hover {
          transition: transform 0.18s ease, background-color 0.18s ease;
        }
        .feed-btn-hover:hover {
          transform: translateY(-2px);
          background-color: #d9757d;
        }
        .feed-btn-pressed {
          transform: scale(0.95) !important;
        }
        @media (max-width: 800px) {
          .feed-hootigan-section {
            padding: 24px 20px !important;
          }
          .feed-hootigan-section .feed-grid {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
};

const sectionContainerStyle = {
  backgroundColor: 'var(--lavender-light)',
  borderRadius: '24px',
  border: '1px solid var(--border-card)',
  padding: '32px 36px',
  margin: '36px 0 20px 0',
  boxShadow: 'var(--shadow-sm)'
};

const contentGridStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '32px',
  flexWrap: 'wrap'
};

const textColStyle = {
  flex: '1 1 360px',
  display: 'flex',
  flexDirection: 'column'
};

const categoryBadgeStyle = {
  fontSize: '0.72rem',
  letterSpacing: '0.14em',
  fontWeight: 700,
  color: 'var(--primary-lavender)',
  marginBottom: '6px',
  textTransform: 'uppercase'
};

const headerRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '10px'
};

const headingStyle = {
  fontSize: '2rem',
  fontWeight: 700,
  color: 'var(--text-ink)',
  margin: 0,
  fontFamily: 'var(--font-display)'
};

const descStyle = {
  fontSize: '0.98rem',
  color: 'var(--text-muted)',
  lineHeight: '1.6',
  marginBottom: '20px',
  maxWidth: '430px'
};

const actionRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '6px'
};

const feedBtnStyle = {
  padding: '11px 26px',
  fontSize: '0.96rem',
  gap: '10px',
  boxShadow: '0 4px 14px rgba(233, 137, 145, 0.35)'
};

const subtextNoteStyle = {
  fontFamily: 'var(--font-hand)',
  fontSize: '1.25rem',
  color: 'var(--text-muted)',
  marginTop: '4px'
};

const illusColStyle = {
  flex: '1 1 380px',
  display: 'flex',
  justifyContent: 'center'
};

const illusCardStyle = {
  borderRadius: '18px',
  overflow: 'hidden',
  boxShadow: 'var(--shadow-sm)',
  backgroundColor: 'var(--bg-card)',
  border: '1px solid var(--border-card)',
  width: '100%',
  maxWidth: '440px'
};

const bowlImgStyle = {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  display: 'block'
};
