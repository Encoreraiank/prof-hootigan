import React from 'react';
import { FeedTheHootigan } from '../components/FeedTheHootigan';
import { IdeasBanner } from '../components/IdeasBanner';

export const ProfHootigan = () => {
  return (
    <div className="about-page page-container" style={{ paddingBottom: '30px' }}>
      {/* 1. Hero / Intro Section */}
      <section style={heroSectionStyle} className="about-hero-section">
        {/* Left text column */}
        <div style={heroTextColStyle} className="about-hero-text-col">
          <div style={heyThereWrapperStyle} className="about-hey-wrapper">
            <span style={heyThereTextStyle} className="about-hey-text">Hey there!</span>
          </div>

          <h1 style={mainTitleStyle} className="about-hero-title">
            I'm <br />
            Prof Hootigan.
          </h1>

          <p style={taglineStyle} className="about-hero-tagline">
            A curious mind behind small stories and big tomorrows.
          </p>

          <div style={dividerBarStyle} className="about-divider-bar" />

          <p style={bioTextStyle} className="about-bio-text">
            I create comics about everyday moments, messy days and the little things that make life brighter.
          </p>
        </div>

        {/* Right illustration column with animated desk scene */}
        <div style={heroIllusColStyle} className="about-hero-illus-col">
          <div style={heroIllusCardStyle} className="about-hero-illus-card">
            <img
              src="./assets/animated/phbnr1.gif"
              alt="Prof Hootigan animated sketching at desk"
              style={heroImgStyle}
            />
          </div>
        </div>
      </section>

      {/* Subtle Divider */}
      <div style={sectionDividerStyle} className="about-section-divider" />

      {/* 2. The Story Section with high-res Polaroid */}
      <section style={storySectionStyle} className="about-story-section">
        {/* Left: Polaroid Photo */}
        <div style={polaroidColStyle} className="about-polaroid-col">
          <div style={polaroidCardStyle} className="polaroid-hover about-polaroid-card">
            <img
              src="./assets/characters/prof-hootigan-polaroid.png"
              alt="Prof Hootigan Polaroid — Tiny seeds, big stories"
              style={polaroidImgStyle}
            />
          </div>
        </div>

        {/* Right: Story Text */}
        <div style={storyTextColStyle} className="about-story-text-col">
          <span style={categoryLabelStyle} className="about-category-label">THE STORY</span>
          <div style={storyHeaderRowStyle} className="about-story-header-row">
            <h2 style={storyTitleStyle} className="about-story-title">Why I Create</h2>
            <span style={{ color: 'var(--primary-lavender)', fontSize: '1.4rem' }}>彡</span>
          </div>

          <p style={storyParagraphStyle} className="about-story-p">
            Prof Hootigan is my way of exploring ideas, emotions and perspectives through simple stories and relatable characters.
          </p>

          <p style={storyParagraphStyle} className="about-story-p">
            I hope these comics bring a little joy, comfort or a new thought to your day.
          </p>
        </div>
      </section>

      {/* 3. Feed The Hootigan Support Section with full high-res seeds illustration */}
      <FeedTheHootigan compact={false} />

      {/* 4. Bottom Brand Banner */}
      <IdeasBanner />

      <style>{`
        .polaroid-hover {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .polaroid-hover:hover {
          transform: rotate(0deg) scale(1.03) !important;
        }
        @media (max-width: 680px) {
          .about-hero-section {
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            align-items: center !important;
            gap: 12px !important;
            margin-top: 6px !important;
            margin-bottom: 16px !important;
          }
          .about-hero-text-col {
            flex: 1 1 auto !important;
            min-width: 0 !important;
          }
          .about-hey-text {
            font-size: 1.05rem !important;
          }
          .about-hero-title {
            font-size: 1.35rem !important;
            line-height: 1.15 !important;
            margin: 0 0 4px 0 !important;
          }
          .about-hero-tagline {
            font-size: 0.78rem !important;
            line-height: 1.3 !important;
            margin-bottom: 6px !important;
          }
          .about-divider-bar {
            width: 26px !important;
            height: 2.5px !important;
            margin-bottom: 6px !important;
          }
          .about-bio-text {
            font-size: 0.74rem !important;
            line-height: 1.35 !important;
          }
          .about-hero-illus-col {
            flex: 0 0 115px !important;
            width: 115px !important;
            max-width: 115px !important;
          }
          .about-hero-illus-card {
            max-width: 115px !important;
            border-radius: 12px !important;
          }
          .about-section-divider {
            margin: 14px 0 20px 0 !important;
          }
          .about-story-section {
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            align-items: center !important;
            gap: 12px !important;
            margin-bottom: 24px !important;
          }
          .about-polaroid-col {
            flex: 0 0 110px !important;
            width: 110px !important;
            max-width: 110px !important;
          }
          .about-polaroid-card {
            max-width: 110px !important;
          }
          .about-story-text-col {
            flex: 1 1 auto !important;
            min-width: 0 !important;
          }
          .about-category-label {
            font-size: 0.68rem !important;
            margin-bottom: 2px !important;
          }
          .about-story-header-row {
            gap: 6px !important;
            margin-bottom: 6px !important;
          }
          .about-story-title {
            font-size: 1.25rem !important;
          }
          .about-story-header-row span {
            font-size: 1rem !important;
          }
          .about-story-p {
            font-size: 0.76rem !important;
            line-height: 1.35 !important;
            margin-bottom: 6px !important;
          }
        }
      `}</style>
    </div>
  );
};

const heroSectionStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '28px',
  marginTop: '14px',
  marginBottom: '28px',
  flexWrap: 'wrap'
};

const heroTextColStyle = {
  flex: '1 1 320px',
  display: 'flex',
  flexDirection: 'column'
};

const heyThereWrapperStyle = {
  marginBottom: '8px'
};

const heyThereTextStyle = {
  fontFamily: 'var(--font-hand)',
  fontSize: '1.45rem',
  color: 'var(--text-ink)',
  display: 'inline-block',
  borderBottom: '2.5px solid var(--primary-lavender)',
  paddingBottom: '2px',
  transform: 'rotate(-2deg)'
};

const mainTitleStyle = {
  fontSize: '2.3rem',
  fontWeight: 700,
  lineHeight: '1.15',
  color: 'var(--text-ink)',
  margin: '0 0 10px 0',
  letterSpacing: '-0.02em',
  fontFamily: 'var(--font-display)'
};

const taglineStyle = {
  fontSize: '1.05rem',
  fontWeight: 600,
  color: 'var(--text-ink)',
  lineHeight: '1.4',
  marginBottom: '10px'
};

const dividerBarStyle = {
  width: '36px',
  height: '3px',
  backgroundColor: 'var(--primary-lavender)',
  borderRadius: '2px',
  marginBottom: '12px'
};

const bioTextStyle = {
  fontSize: '0.94rem',
  color: 'var(--text-muted)',
  lineHeight: '1.55',
  maxWidth: '420px'
};

const heroIllusColStyle = {
  flex: '0 0 250px',
  display: 'flex',
  justifyContent: 'center'
};

const heroIllusCardStyle = {
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 8px 24px rgba(37, 35, 43, 0.1)',
  border: '1px solid var(--border-card)',
  backgroundColor: '#FFFFFF',
  width: '100%',
  maxWidth: '240px'
};

const heroImgStyle = {
  width: '100%',
  height: 'auto',
  display: 'block'
};

const sectionDividerStyle = {
  height: '1px',
  backgroundColor: 'rgba(37, 35, 43, 0.08)',
  margin: '10px 0 40px 0'
};

const storySectionStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '40px',
  marginBottom: '48px',
  flexWrap: 'wrap-reverse'
};

const polaroidColStyle = {
  flex: '1 1 320px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const polaroidCardStyle = {
  maxWidth: '340px',
  width: '100%',
  filter: 'drop-shadow(0 12px 24px rgba(37, 35, 43, 0.12))',
  transform: 'rotate(-2deg)'
};

const polaroidImgStyle = {
  width: '100%',
  height: 'auto',
  display: 'block'
};

const storyTextColStyle = {
  flex: '1 1 400px'
};

const categoryLabelStyle = {
  fontSize: '0.74rem',
  fontWeight: 700,
  letterSpacing: '0.14em',
  color: '#766099',
  marginBottom: '6px',
  display: 'block'
};

const storyHeaderRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '14px'
};

const storyTitleStyle = {
  fontSize: '2.2rem',
  fontWeight: 700,
  margin: 0,
  color: 'var(--text-ink)',
  fontFamily: 'var(--font-display)'
};

const storyParagraphStyle = {
  fontSize: '1.04rem',
  color: 'var(--text-muted)',
  lineHeight: '1.68',
  marginBottom: '14px'
};
