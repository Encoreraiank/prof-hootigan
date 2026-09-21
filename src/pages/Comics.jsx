import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { comics } from '../data/comics';
import { ComicCard } from '../components/ComicCard';
import { IdeasBanner } from '../components/IdeasBanner';
import {
  BookOpen,
  ArrowRight,
  Clock,
  Heart,
  Smile,
  Users,
  Info
} from 'lucide-react';

export const Comics = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('s1');

  const characters = [
    {
      name: "The Black Cat",
      role: "The Tired Overthinker",
      bio: "Works hard, worries a little too much, and needs lots of reassurance and coffee mugs.",
      quote: "Some days just feel heavier than usual... ♡",
      avatar: "/assets/characters/cats-together.png"
    },
    {
      name: "The Cream Cat",
      role: "The Cheerful Companion",
      bio: "Wears a blue scarf, always brings hot coffee, and knows when a buddy needs a distraction.",
      quote: "Rough days are part of the story. You got this! ♡",
      avatar: "/assets/characters/char-cream-cat.png"
    },
    {
      name: "Rejection Bot",
      role: "The Reformed Machine",
      bio: "Used to stamp 'REJECT ALL' all day until distracted by a red laser and a green button.",
      quote: "New Opportunity! ✨",
      avatar: "/assets/characters/char-bot.png"
    }
  ];

  return (
    <div className="comics-page page-container" style={{ paddingBottom: '40px' }}>

      {/* 1. TOP ANIMATED HERO BANNER (herocom.gif loop) */}
      <section style={topBannerSectionStyle}>
        <div style={topBannerWrapperStyle} className="hero-banner-frame">
          <img
            src="/assets/animated/herocom.gif"
            alt="Catastrophe Club — Animated Moving Train Journey"
            style={topBannerImgStyle}
          />
        </div>
      </section>

      {/* 2. SEASON TABS & FILTER (Matches Reference Mockup) */}
      <div style={seasonFilterRowStyle}>
        <div style={tabsGroupStyle}>
          <button
            onClick={() => setActiveTab('s1')}
            className={`pill-btn ${activeTab === 's1' ? 'pill-btn-dark' : 'pill-btn-light'}`}
            style={{ padding: '8px 22px', fontSize: '0.92rem' }}
          >
            Season 1
          </button>
          <button
            onClick={() => setActiveTab('details')}
            className={`pill-btn ${activeTab === 'details' ? 'pill-btn-dark' : 'pill-btn-light'}`}
            style={{ padding: '8px 18px', fontSize: '0.92rem', gap: 6 }}
          >
            <Info size={15} />
            <span>Story & Poster</span>
          </button>
          <button
            onClick={() => setActiveTab('characters')}
            className={`pill-btn ${activeTab === 'characters' ? 'pill-btn-dark' : 'pill-btn-light'}`}
            style={{ padding: '8px 18px', fontSize: '0.92rem', gap: 6 }}
          >
            <Users size={15} />
            <span>Meet The Cast</span>
          </button>
        </div>

        <div style={handwrittenNoteStyle}>
          <span>More stories on the way... ♡</span>
        </div>
      </div>

      {/* 3. SEASON 1 EPISODES (Clean, compact 3-column cards) */}
      {activeTab === 's1' && (
        <>
          <div style={seasonHeaderStyle}>
            <h2 style={seasonTitleStyle}>Season 1</h2>
            <p style={seasonSubtitleStyle}>The Daily Grind of Being Feline</p>
          </div>

          <div style={episodesGridStyle}>
            {comics.map((comic) => (
              <ComicCard key={comic.id} comic={comic} />
            ))}
          </div>
        </>
      )}

      {/* 4. STORY & POSTER TAB (Optional details when user wants to see) */}
      {activeTab === 'details' && (
        <section style={{ marginBottom: '32px' }}>
          <div style={detailsCardStyle} className="card-box">
            {/* Poster */}
            <div style={posterFrameStyle} onClick={() => navigate('/comics/ep-01')}>
              <img
                src="/assets/comics/catastrophe-club/cover.png"
                alt="Catastrophe Club Season 1 Poster"
                style={posterImgStyle}
              />
              <span className="badge-pill badge-coral" style={seasonBadgeStyle}>
                SEASON 1
              </span>
            </div>

            {/* Synopsis */}
            <div style={detailsContentStyle}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6, flexWrap: 'wrap' }}>
                <span className="badge-pill badge-lavender" style={{ fontSize: '0.76rem' }}>
                  ORIGINAL WEBCOMIC
                </span>
                <span className="badge-pill badge-coral" style={{ fontSize: '0.76rem' }}>
                  SEASON 1
                </span>
                <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  • By Prof Hootigan
                </span>
              </div>

              <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '0 0 4px 0', fontFamily: 'var(--font-display)' }}>
                Catastrophe Club
              </h2>
              <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-coral)', margin: '0 0 10px 0' }}>
                Small Tails, Big Adventures.
              </p>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '16px' }}>
                Follow the heartwarming and chaotic escapades of two cat companions navigating heavy
                days, rejection factories, and cozy coffee moments. A gentle comic reminder that
                rough days are just part of the story.
              </p>

              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: '18px' }}>
                <span style={statBadgeStyle}><BookOpen size={14} color="#554275" /> 3 Episodes</span>
                <span style={statBadgeStyle}><Clock size={14} color="#554275" /> 1 min each</span>
                <span style={statBadgeStyle}><Smile size={14} color="#2A9D8F" /> Free to Read</span>
              </div>

              <button
                onClick={() => navigate('/comics/ep-01')}
                className="pill-btn pill-btn-dark"
                style={{ padding: '10px 24px', fontSize: '0.95rem', gap: 8, width: 'fit-content' }}
              >
                <span>Start Reading EP 01</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 5. MEET THE CAST TAB */}
      {activeTab === 'characters' && (
        <section style={{ margin: '24px 0 36px 0' }}>
          <div style={charactersGridStyle}>
            {characters.map(char => (
              <div key={char.name} className="card-box" style={characterCardStyle}>
                <div style={charAvatarWrapperStyle}>
                  <img
                    src={char.avatar}
                    alt={char.name}
                    style={charAvatarImgStyle}
                  />
                </div>
                <h3 style={charNameStyle}>{char.name}</h3>
                <span style={charRoleStyle}>{char.role}</span>
                <p style={charBioStyle}>{char.bio}</p>
                <div style={charQuoteBoxStyle}>
                  <span style={{ fontFamily: 'var(--font-hand)', fontSize: '1.15rem', color: 'var(--text-ink)' }}>
                    "{char.quote}"
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. COZY AFFIRMATIONS WALL */}
      <section style={affirmationsWallStyle}>
        <div style={corkboardHeaderStyle}>
          <span style={{ color: 'var(--accent-coral)', fontSize: '1.2rem' }}>彡</span>
          <h3 style={{ margin: 0, fontSize: '1.25rem', fontFamily: 'var(--font-display)' }}>
            Notes from the Drawing Board
          </h3>
          <span style={{ color: 'var(--accent-coral)', fontSize: '1.2rem' }}>ミ</span>
        </div>

        <div style={stickyNotesRowStyle}>
          <div style={{ ...stickyNoteItemStyle, transform: 'rotate(-1.5deg)', backgroundColor: '#FFFBEA', borderColor: '#EFE4B5' }}>
            <div style={pinStyle} />
            <p style={noteTextStyle}>Paws. Pause. Recharge. ♡</p>
          </div>
          <div style={{ ...stickyNoteItemStyle, transform: 'rotate(1.2deg)', backgroundColor: '#F3EDFA', borderColor: '#DFD1F3' }}>
            <div style={pinStyle} />
            <p style={noteTextStyle}>Rough days are part of the story. You're doing better than you think. ♡</p>
          </div>
          <div style={{ ...stickyNoteItemStyle, transform: 'rotate(-1deg)', backgroundColor: '#FDEEEF', borderColor: '#F5CDD1' }}>
            <div style={pinStyle} />
            <p style={noteTextStyle}>Different Ideas. Brighter Days. Teamwork always wins! ♡</p>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM BANNER (bottomk.png) */}
      <IdeasBanner />

      <style>{`
        .hero-banner-frame {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .hero-banner-frame:hover {
          box-shadow: 0 14px 32px rgba(37, 35, 43, 0.12);
        }
        @media (max-width: 768px) {
          .comics-page .season-filter-row {
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
  marginBottom: '26px'
};

const topBannerWrapperStyle = {
  width: '100%',
  borderRadius: '22px',
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

// 2. Tabs Row
const seasonFilterRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '24px 0 16px 0',
  flexWrap: 'wrap',
  gap: '12px'
};

const tabsGroupStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  flexWrap: 'wrap'
};

const handwrittenNoteStyle = {
  fontFamily: 'var(--font-hand)',
  fontSize: '1.25rem',
  color: 'var(--text-muted)',
  textDecoration: 'underline wavy var(--primary-lavender)'
};

// 3. Season 1 Heading
const seasonHeaderStyle = {
  marginBottom: '20px',
  borderBottom: '1.5px solid rgba(37, 35, 43, 0.08)',
  paddingBottom: '12px'
};

const seasonTitleStyle = {
  fontSize: '2rem',
  fontWeight: 700,
  margin: '0 0 4px 0',
  color: 'var(--text-ink)',
  fontFamily: 'var(--font-display)'
};

const seasonSubtitleStyle = {
  fontSize: '1rem',
  fontWeight: 600,
  color: 'var(--text-muted)',
  margin: 0
};

// 4. Compact 3-Column Episodes Grid (Matches Reference Mockup)
const episodesGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
  gap: '22px',
  marginBottom: '36px'
};

// 5. Details Tab
const detailsCardStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '28px',
  backgroundColor: '#FFFFFF',
  borderRadius: '20px',
  padding: '24px',
  border: '1px solid var(--border-card)',
  boxShadow: 'var(--shadow-sm)',
  flexWrap: 'wrap'
};

const posterFrameStyle = {
  position: 'relative',
  borderRadius: '14px',
  overflow: 'hidden',
  boxShadow: '0 8px 22px rgba(37, 35, 43, 0.14)',
  border: '1px solid var(--border-card)',
  cursor: 'pointer',
  aspectRatio: '3/4',
  width: '160px',
  flexShrink: 0
};

const posterImgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block'
};

const seasonBadgeStyle = {
  position: 'absolute',
  top: '8px',
  right: '8px',
  fontSize: '0.72rem',
  padding: '3px 8px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.12)'
};

const detailsContentStyle = {
  flex: '1 1 300px',
  display: 'flex',
  flexDirection: 'column'
};

const statBadgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '5px',
  padding: '5px 12px',
  borderRadius: 'var(--radius-pill)',
  backgroundColor: 'var(--bg-cream)',
  border: '1px solid var(--border-subtle)',
  fontSize: '0.82rem',
  fontWeight: 600,
  color: 'var(--text-ink)'
};

// 6. Characters
const charactersGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '18px'
};

const characterCardStyle = {
  padding: '20px',
  borderRadius: '18px',
  backgroundColor: '#FFFFFF',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const charAvatarWrapperStyle = {
  width: '84px',
  height: '84px',
  borderRadius: '50%',
  overflow: 'hidden',
  border: '2.5px solid var(--primary-lavender)',
  boxShadow: '0 4px 12px rgba(37, 35, 43, 0.08)',
  marginBottom: '12px',
  backgroundColor: '#F8F4EC'
};

const charAvatarImgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
};

const charNameStyle = {
  fontSize: '1.18rem',
  fontWeight: 700,
  margin: '0 0 2px 0',
  fontFamily: 'var(--font-display)'
};

const charRoleStyle = {
  fontSize: '0.84rem',
  color: 'var(--accent-coral)',
  fontWeight: 600,
  marginBottom: '8px'
};

const charBioStyle = {
  fontSize: '0.86rem',
  color: 'var(--text-muted)',
  lineHeight: '1.5',
  marginBottom: '12px'
};

const charQuoteBoxStyle = {
  marginTop: 'auto',
  backgroundColor: 'var(--bg-cream)',
  padding: '6px 14px',
  borderRadius: '10px',
  width: '100%'
};

// 7. Affirmations
const affirmationsWallStyle = {
  backgroundColor: '#FAF5EA',
  borderRadius: '20px',
  padding: '22px 20px',
  margin: '28px 0',
  border: '1px solid var(--border-card)'
};

const corkboardHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  marginBottom: '16px'
};

const stickyNotesRowStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '18px'
};

const stickyNoteItemStyle = {
  position: 'relative',
  padding: '16px 18px',
  borderRadius: '12px',
  border: '1px solid',
  boxShadow: '0 3px 10px rgba(37, 35, 43, 0.04)',
  textAlign: 'center'
};

const pinStyle = {
  position: 'absolute',
  top: '-5px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '24px',
  height: '10px',
  backgroundColor: 'rgba(235, 200, 140, 0.8)',
  borderRadius: '2px'
};

const noteTextStyle = {
  fontFamily: 'var(--font-hand)',
  fontSize: '1.25rem',
  color: '#4B4232',
  margin: 0,
  lineHeight: '1.2'
};
