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
          <div style={posterColStyle} className="spotlight-poster-col">
            <div
              style={compactPosterFrameStyle}
              onClick={() => navigate('/comics/ep-01')}
              className="poster-card-hover spotlight-poster-frame"
              title="Start reading Catastrophe Club"
            >
              <img
                src="./assets/comics/catastrophe-club/cover.png"
                alt="Catastrophe Club Season 1 Poster"
                style={posterImgStyle}
                className="spotlight-poster-img"
              />
              <span className="badge-pill badge-coral" style={seasonBadgeStyle}>
                SEASON 1
              </span>
            </div>
          </div>

          {/* Right: Comic Description & Actions */}
          <div style={detailsColStyle} className="spotlight-details-col">
            <div style={badgeRowStyle} className="spotlight-badge-row">
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
              <span className="spotlight-author-text" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                • By Prof Hootigan
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap', margin: '4px 0 2px 0' }}>
              <h1 style={seriesTitleStyle} className="spotlight-series-title">Catastrophe Club</h1>
              <span style={seriesSubtitleStyle} className="spotlight-series-subtitle">Small Tails, Big Adventures.</span>
            </div>

            <p style={seriesDescStyle} className="spotlight-series-desc">
              Follow two cat companions navigating heavy days, rejection factories, and cozy coffee moments together.
              A gentle comic reminder that rough days are just part of the story.
            </p>

            {/* Quick Meta + CTA Row */}
            <div style={compactActionsRowStyle} className="spotlight-actions-row">
              <div style={statsRowStyle} className="spotlight-stats-row">
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
      <div style={episodesHeaderStyle} className="comics-episodes-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ color: 'var(--accent-coral)', fontSize: '1.2rem' }}>彡</span>
          <h2 style={episodesHeadingStyle} className="comics-episodes-heading">Season 1 Episodes</h2>
          <span style={{ color: 'var(--accent-coral)', fontSize: '1.2rem' }}>ミ</span>
        </div>
        <span style={episodesSubtextStyle} className="comics-episodes-subtext">The Daily Grind of Being Feline • 3 Episodes Available</span>
      </div>

      {/* 5. 3 COMPACT EPISODE CARDS (Matches Mockup) */}
      <div style={episodesGridStyle} className="episodes-grid">
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
        @media (max-width: 680px) {
          .spotlight-card-wrap {
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            align-items: stretch !important;
            text-align: left !important;
            gap: 14px !important;
            padding: 12px !important;
          }
          .spotlight-poster-col {
            flex: 0 0 110px !important;
            width: 110px !important;
            max-width: 110px !important;
            display: flex !important;
            flex-direction: column !important;
            align-self: stretch !important;
          }
          .spotlight-poster-frame {
            width: 100% !important;
            max-width: 100% !important;
            height: 100% !important;
            flex: 1 !important;
            display: flex !important;
            border-radius: 12px !important;
            overflow: hidden !important;
            position: relative !important;
          }
          .spotlight-poster-img {
            width: 100% !important;
            height: 100% !important;
            min-height: 165px !important;
            object-fit: cover !important;
            object-position: center top !important;
            border-radius: 12px !important;
          }
          .spotlight-details-col {
            flex: 1 1 auto !important;
            min-width: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            text-align: left !important;
          }
          .spotlight-badge-row {
            gap: 4px !important;
            margin-bottom: 3px !important;
          }
          .spotlight-badge-row .badge-pill {
            font-size: 0.64rem !important;
            padding: 2px 7px !important;
          }
          .spotlight-author-text {
            display: none !important;
          }
          .spotlight-series-title {
            font-size: 1.18rem !important;
            line-height: 1.15 !important;
            margin: 0 !important;
          }
          .spotlight-series-subtitle {
            font-size: 0.74rem !important;
            color: var(--text-muted) !important;
            margin-bottom: 2px !important;
          }
          .spotlight-series-desc {
            font-size: 0.74rem !important;
            line-height: 1.35 !important;
            margin: 4px 0 10px 0 !important;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .spotlight-actions-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 6px !important;
            margin-top: auto !important;
          }
          .spotlight-stats-row {
            display: none !important;
          }
          .spotlight-actions-row button {
            padding: 7px 16px !important;
            font-size: 0.8rem !important;
            box-shadow: 0 4px 12px rgba(37, 35, 43, 0.2) !important;
          }
          .comics-episodes-heading {
            font-size: 1.25rem !important;
          }
          .comics-episodes-subtext {
            font-size: 0.74rem !important;
          }
          .episodes-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .season-filter-row {
            margin: 10px 0 12px 0 !important;
            gap: 8px !important;
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
