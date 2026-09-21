import React from 'react';
import { useNavigate } from 'react-router-dom';
import { comics } from '../data/comics';
import { ComicCard } from '../components/ComicCard';
import { IdeasBanner } from '../components/IdeasBanner';
import {
  BookOpen,
  ArrowRight,
  Clock,
  Smile
} from 'lucide-react';

export const Comics = () => {
  const navigate = useNavigate();

  return (
    <div className="comics-page page-container" style={{ paddingBottom: '40px' }}>

      {/* 1. TOP ANIMATED HERO BANNER (herocom.gif loop) */}
      <section style={topBannerSectionStyle}>
        <div style={topBannerWrapperStyle} className="hero-banner-frame">
          <img
            src="./assets/animated/herocom.gif"
            alt="Catastrophe Club — Animated Moving Train Journey"
            style={topBannerImgStyle}
          />
        </div>
      </section>

      {/* 2. SERIES BUTTON & HANDWRITTEN NOTE */}
      <div style={seasonFilterRowStyle} className="season-filter-row">
        <div style={tabsGroupStyle}>
          <button
            className="pill-btn pill-btn-dark"
            style={{ padding: '8px 24px', fontSize: '0.94rem' }}
          >
            Catastrophe Club
          </button>
        </div>

        <div style={handwrittenNoteStyle}>
          <span>More stories on the way... ♡</span>
        </div>
      </div>

      {/* 3. COMPACT POSTER & COMIC DESCRIPTION SECTION */}
      <section style={spotlightSectionStyle}>
        <div style={spotlightCardStyle} className="card-box spotlight-card-wrap">
          {/* Left: Small Compact Poster */}
          <div style={posterColStyle}>
            <div
              style={compactPosterFrameStyle}
              onClick={() => navigate('/comics/ep-01')}
              className="poster-card-hover"
              title="Start reading Catastrophe Club"
            >
              <img
                src="./assets/comics/catastrophe-club/cover.png"
                alt="Catastrophe Club Season 1 Poster"
                style={posterImgStyle}
              />
              <span className="badge-pill badge-coral" style={seasonBadgeStyle}>
                SEASON 1
              </span>
            </div>
          </div>

          {/* Right: Comic Description & Actions */}
          <div style={detailsColStyle}>
            <div style={badgeRowStyle}>
              <span className="badge-pill badge-lavender" style={{ fontSize: '0.74rem' }}>
                ORIGINAL WEBCOMIC
              </span>
              <span className="badge-pill badge-coral" style={{ fontSize: '0.74rem' }}>
                SEASON 1
              </span>
              <span
                className="badge-pill"
                style={{ backgroundColor: '#E8F5E9', color: '#2E7D32', fontSize: '0.74rem' }}
              >
                FREE TO READ
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                • By Prof Hootigan
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap', margin: '4px 0 2px 0' }}>
              <h1 style={seriesTitleStyle}>Catastrophe Club</h1>
              <span style={seriesSubtitleStyle}>Small Tails, Big Adventures.</span>
            </div>

            <p style={seriesDescStyle}>
              Follow two cat companions navigating heavy days, rejection factories, and cozy coffee moments together.
              A gentle comic reminder that rough days are just part of the story.
            </p>

            {/* Quick Meta + CTA Row */}
            <div style={compactActionsRowStyle}>
              <div style={statsRowStyle}>
                <span style={statPillStyle}>
                  <BookOpen size={13} color="#554275" />
                  <span>3 Episodes</span>
                </span>
                <span style={statPillStyle}>
                  <Clock size={13} color="#554275" />
                  <span>1 min each</span>
                </span>
                <span style={statPillStyle}>
                  <Smile size={13} color="#2A9D8F" />
                  <span>Heartwarming Comedy</span>
                </span>
              </div>

              <div style={ctaButtonsRowStyle}>
                <button
                  onClick={() => navigate('/comics/ep-01')}
                  className="pill-btn pill-btn-dark"
                  style={{ padding: '8px 20px', fontSize: '0.88rem', gap: 7 }}
                >
                  <span>Start Reading EP 01</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EPISODES HEADER */}
      <div style={episodesHeaderStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ color: 'var(--accent-coral)', fontSize: '1.2rem' }}>彡</span>
          <h2 style={episodesHeadingStyle}>Season 1 Episodes</h2>
          <span style={{ color: 'var(--accent-coral)', fontSize: '1.2rem' }}>ミ</span>
        </div>
        <span style={episodesSubtextStyle}>The Daily Grind of Being Feline • 3 Episodes Available</span>
      </div>

      {/* 5. 3 COMPACT EPISODE CARDS (Matches Mockup) */}
      <div style={episodesGridStyle}>
        {comics.map((comic) => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </div>

      {/* 6. BOTTOM BANNER (bottomk.png) */}
      <IdeasBanner />

      <style>{`
        .hero-banner-frame {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .hero-banner-frame:hover {
          box-shadow: 0 14px 32px rgba(37, 35, 43, 0.12);
        }
        .poster-card-hover {
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s ease;
        }
        .poster-card-hover:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 24px rgba(37, 35, 43, 0.16);
        }
        @media (max-width: 768px) {
          .spotlight-card-wrap {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center;
          }
          .season-filter-row {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </div>
  );
};

/* --- STYLES --- */

// 1. Top Animated Hero Banner
const topBannerSectionStyle = {
  marginTop: '16px',
  marginBottom: '22px'
};

const topBannerWrapperStyle = {
  width: '100%',
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: 'var(--shadow-md)',
  border: '1px solid var(--border-card)',
  backgroundColor: '#FAF5EA',
  maxHeight: '380px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const topBannerImgStyle = {
  width: '100%',
  height: 'auto',
  maxHeight: '380px',
  objectFit: 'cover',
  display: 'block'
};

// 2. Filter Row
const seasonFilterRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '20px 0 16px 0',
  flexWrap: 'wrap',
  gap: '12px'
};

const tabsGroupStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
};

const handwrittenNoteStyle = {
  fontFamily: 'var(--font-hand)',
  fontSize: '1.25rem',
  color: 'var(--text-muted)',
  textDecoration: 'underline wavy var(--primary-lavender)'
};

// 3. Compact Spotlight Section (Poster + Description)
const spotlightSectionStyle = {
  marginBottom: '26px'
};

const spotlightCardStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '22px',
  backgroundColor: '#FFFFFF',
  borderRadius: '20px',
  padding: '18px 22px',
  border: '1px solid var(--border-card)',
  boxShadow: 'var(--shadow-sm)',
  flexWrap: 'wrap'
};

const posterColStyle = {
  flex: '0 0 120px',
  display: 'flex',
  justifyContent: 'center'
};

const compactPosterFrameStyle = {
  position: 'relative',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 6px 16px rgba(37, 35, 43, 0.12)',
  border: '1px solid var(--border-card)',
  cursor: 'pointer',
  aspectRatio: '3/4',
  width: '120px'
};

const posterImgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block'
};

const seasonBadgeStyle = {
  position: 'absolute',
  top: '7px',
  right: '7px',
  fontSize: '0.66rem',
  padding: '2px 6px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.12)'
};

const detailsColStyle = {
  flex: '1 1 320px',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px'
};

const badgeRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 7,
  flexWrap: 'wrap',
  marginBottom: '2px'
};

const seriesTitleStyle = {
  fontSize: '1.6rem',
  fontWeight: 700,
  lineHeight: '1.2',
  margin: 0,
  color: 'var(--text-ink)',
  fontFamily: 'var(--font-display)'
};

const seriesSubtitleStyle = {
  fontSize: '0.98rem',
  fontWeight: 700,
  color: 'var(--accent-coral)'
};

const seriesDescStyle = {
  fontSize: '0.88rem',
  color: 'var(--text-muted)',
  lineHeight: '1.5',
  margin: '4px 0 10px 0',
  maxWidth: '680px'
};

const compactActionsRowStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
  flexWrap: 'wrap',
  paddingTop: '8px',
  borderTop: '1px solid rgba(37, 35, 43, 0.06)'
};

const statsRowStyle = {
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap'
};

const statPillStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '5px',
  padding: '4px 10px',
  borderRadius: 'var(--radius-pill)',
  backgroundColor: 'var(--bg-cream)',
  border: '1px solid var(--border-subtle)',
  fontSize: '0.78rem',
  fontWeight: 600,
  color: 'var(--text-ink)'
};

const ctaButtonsRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
};

// 4. Episodes Header
const episodesHeaderStyle = {
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  marginBottom: '16px',
  borderBottom: '1.5px solid rgba(37, 35, 43, 0.08)',
  paddingBottom: '10px',
  flexWrap: 'wrap',
  gap: '8px'
};

const episodesHeadingStyle = {
  fontSize: '1.6rem',
  fontWeight: 700,
  margin: 0,
  color: 'var(--text-ink)',
  fontFamily: 'var(--font-display)'
};

const episodesSubtextStyle = {
  fontSize: '0.88rem',
  color: 'var(--text-muted)',
  fontWeight: 600
};

// 5. Compact 3-Column Episodes Grid
const episodesGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
  gap: '20px',
  marginBottom: '32px'
};
