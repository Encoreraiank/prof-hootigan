import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { comics } from '../data/comics';
import { ComicCard } from '../components/ComicCard';
import { IdeasBanner } from '../components/IdeasBanner';

export const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const heroBanners = [
    {
      id: 'bnr1',
      src: './assets/animated/bnr1.gif',
      alt: 'Catastrophe Club — Small Tails, Big Adventures (Sunset Bridge)',
      episodeLink: '/comics/ep-01'
    },
    {
      id: 'bnr2',
      src: './assets/animated/bnr2.gif',
      alt: 'Catastrophe Club — New Friends and Bright Days',
      episodeLink: '/comics/ep-02'
    },
    {
      id: 'bnr3',
      src: './assets/animated/bnr3.gif',
      alt: 'Catastrophe Club — Cozy Sunlit Cat Naps',
      episodeLink: '/comics/ep-03'
    }
  ];

  // Auto-slide loop every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, heroBanners.length]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
    } else if (diff < -50) {
      setCurrentSlide((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);
    }
  };

  return (
    <div className="home-page page-container" style={{ paddingBottom: '20px' }}>
      {/* 1. Animated Hero Carousel Section */}
      <section style={heroSectionStyle}>
        <div
          style={heroCarouselContainerStyle}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={() => navigate('/comics/ep-01')}
          title="Click to start reading Catastrophe Club"
          className="hero-carousel-wrapper"
        >
          {/* Sliding Track */}
          <div
            style={{
              ...heroTrackStyle,
              transform: `translateX(-${currentSlide * 100}%)`
            }}
          >
            {heroBanners.map((banner, index) => (
              <div key={banner.id} style={heroSlideStyle}>
                <img
                  src={banner.src}
                  alt={banner.alt}
                  style={heroImageStyle}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            style={navArrowLeftStyle}
            className="carousel-nav-arrow"
            aria-label="Previous banner"
            title="Previous"
          >
            <ChevronLeft size={22} color="var(--text-ink)" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            style={navArrowRightStyle}
            className="carousel-nav-arrow"
            aria-label="Next banner"
            title="Next"
          >
            <ChevronRight size={22} color="var(--text-ink)" />
          </button>

          {/* Bottom Controls Bar: Dots + Start Reading CTA */}
          <div style={heroOverlayControlsStyle} className="hero-overlay-controls">
            {/* Dot Indicators */}
            <div style={dotsContainerStyle} className="dots-container">
              {heroBanners.map((banner, idx) => (
                <button
                  key={banner.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    ...dotStyle,
                    width: currentSlide === idx ? '28px' : '9px',
                    backgroundColor: currentSlide === idx ? 'var(--text-ink)' : 'rgba(37, 35, 43, 0.35)',
                    borderRadius: currentSlide === idx ? '10px' : '50%'
                  }}
                />
              ))}
            </div>

            {/* Start Reading Pill Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate('/comics/ep-01');
              }}
              className="pill-btn pill-btn-dark hero-start-btn"
            >
              <span>Start Reading</span>
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Latest Episodes Section */}
      <section style={sectionMarginStyle} className="home-episodes-section">
        <div style={sectionHeaderStyle} className="home-section-header">
          <div style={headingGroupStyle} className="home-heading-group">
            <span style={{ color: 'var(--accent-coral)', fontSize: '1.4rem' }}>彡</span>
            <h2 style={sectionHeadingStyle} className="home-section-heading">Latest Episodes</h2>
            <span style={{ color: 'var(--accent-coral)', fontSize: '1.4rem' }}>ミ</span>
          </div>

          <Link to="/comics" style={viewAllLinkStyle} className="home-view-all-link">
            <span>View All</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* The 3 Actual Episode Cards */}
        <div style={episodesGridStyle} className="episodes-grid">
          {comics.map((comic) => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </div>
      </section>

      {/* 3. Bottom Brand Banner */}
      <IdeasBanner />

      <style>{`
        .hero-carousel-wrapper {
          cursor: pointer;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .hero-carousel-wrapper:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 36px rgba(37, 35, 43, 0.14);
        }
        .carousel-nav-arrow {
          opacity: 0;
          transition: opacity 0.2s ease, transform 0.2s ease, background-color 0.2s ease;
        }
        .hero-carousel-wrapper:hover .carousel-nav-arrow {
          opacity: 1;
        }
        .carousel-nav-arrow:hover {
          transform: translateY(-50%) scale(1.1);
          background-color: #FFFFFF !important;
        }
        .hero-start-btn {
          padding: 10px 24px !important;
          font-size: 0.95rem !important;
          box-shadow: 0 6px 18px rgba(37, 35, 43, 0.35);
          transition: transform 0.2s ease, background-color 0.2s ease;
        }
        .hero-start-btn:hover {
          transform: scale(1.04);
          background-color: #17151C;
        }
        @media (max-width: 680px) {
          .carousel-nav-arrow {
            display: none !important;
          }
          .hero-overlay-controls {
            bottom: 8px !important;
            left: 10px !important;
            right: 10px !important;
          }
          .hero-start-btn {
            padding: 5px 12px !important;
            font-size: 0.74rem !important;
            gap: 4px !important;
          }
          .dots-container {
            padding: 3px 8px !important;
            gap: 5px !important;
          }
          .home-section-header {
            margin-bottom: 12px !important;
          }
          .home-section-heading {
            font-size: 1.25rem !important;
            white-space: nowrap !important;
          }
          .home-heading-group span {
            font-size: 1.05rem !important;
          }
          .home-view-all-link {
            padding: 4px 10px !important;
            font-size: 0.78rem !important;
          }
          .episodes-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </div>
  );
};

/* Styles */
const heroSectionStyle = {
  marginTop: '18px',
  marginBottom: '36px'
};

const heroCarouselContainerStyle = {
  position: 'relative',
  borderRadius: '24px',
  overflow: 'hidden',
  boxShadow: 'var(--shadow-md)',
  border: '1px solid var(--border-card)',
  backgroundColor: '#FAF5EA'
};

const heroTrackStyle = {
  display: 'flex',
  transition: 'transform 0.55s cubic-bezier(0.25, 1, 0.5, 1)',
  width: '100%'
};

const heroSlideStyle = {
  minWidth: '100%',
  width: '100%',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FAF5EA'
};

const heroImageStyle = {
  width: '100%',
  height: 'auto',
  maxHeight: '440px',
  objectFit: 'cover',
  display: 'block'
};

const navArrowBaseStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '42px',
  height: '42px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.88)',
  backdropFilter: 'blur(6px)',
  border: '1px solid rgba(37, 35, 43, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: 10,
  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)'
};

const navArrowLeftStyle = {
  ...navArrowBaseStyle,
  left: '16px'
};

const navArrowRightStyle = {
  ...navArrowBaseStyle,
  right: '16px'
};

const heroOverlayControlsStyle = {
  position: 'absolute',
  bottom: '18px',
  left: '24px',
  right: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  zIndex: 10,
  pointerEvents: 'none'
};

const dotsContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(6px)',
  padding: '6px 12px',
  borderRadius: '20px',
  border: '1px solid rgba(37, 35, 43, 0.08)',
  pointerEvents: 'auto'
};

const dotStyle = {
  height: '9px',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)'
};

const sectionMarginStyle = {
  margin: '32px 0 28px 0'
};

const sectionHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px'
};

const headingGroupStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
};

const sectionHeadingStyle = {
  fontSize: '1.95rem',
  fontWeight: 700,
  margin: 0,
  color: 'var(--text-ink)',
  fontFamily: 'var(--font-display)'
};

const viewAllLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '0.94rem',
  fontWeight: 700,
  color: 'var(--text-ink)',
  padding: '6px 14px',
  borderRadius: 'var(--radius-pill)',
  backgroundColor: 'var(--bg-cream)',
  border: '1px solid var(--border-subtle)',
  transition: 'transform 0.15s ease'
};

const episodesGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '20px'
};
