import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  ZoomIn,
  ZoomOut,
  Check
} from 'lucide-react';
import { comics } from '../data/comics';
import confetti from 'canvas-confetti';

export const ComicReader = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentIndex = comics.findIndex(c => c.id === id);
  const comic = currentIndex !== -1 ? comics[currentIndex] : comics[0];

  const prevComic = currentIndex > 0 ? comics[currentIndex - 1] : null;
  const nextComic = currentIndex < comics.length - 1 ? comics[currentIndex + 1] : null;

  const [zoomLevel, setZoomLevel] = useState(1);
  const [hasLiked, setHasLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(comic ? comic.likes : 342);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (comic) {
      setLikesCount(comic.likes);
      setHasLiked(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [id, comic]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && nextComic) {
        navigate(`/comics/${nextComic.id}`);
      } else if (e.key === 'ArrowLeft' && prevComic) {
        navigate(`/comics/${prevComic.id}`);
      } else if (e.key === 'Escape') {
        navigate('/comics');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevComic, nextComic, navigate]);

  const handleLike = () => {
    if (!hasLiked) {
      setHasLiked(true);
      setLikesCount(prev => prev + 1);

      confetti({
        particleCount: 22,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#E98991', '#DCC8F4']
      });
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!comic) {
    return (
      <div className="page-container" style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2>Episode not found</h2>
        <Link to="/comics" className="pill-btn pill-btn-dark" style={{ marginTop: 20 }}>
          Back to Comics
        </Link>
      </div>
    );
  }

  return (
    <div className="comic-reader-page" style={{ minHeight: '100vh', paddingBottom: '60px' }}>
      {/* 1. Reader Sticky Header */}
      <div style={readerNavWrapperStyle}>
        <div className="page-container" style={readerNavContainerStyle}>
          {/* Back button */}
          <Link to="/comics" style={backLinkStyle}>
            <ArrowLeft size={18} />
            <span style={{ fontWeight: 700 }}>All Episodes</span>
          </Link>

          {/* Episode Title & Number */}
          <div style={episodeHeaderCenterStyle}>
            <span className="badge-pill badge-lavender" style={{ fontSize: '0.78rem' }}>
              {comic.episodeCode}
            </span>
            <h2 style={readerTitleStyle}>{comic.title}</h2>
          </div>

          {/* Controls: Zoom, Like, Share */}
          <div style={controlsGroupStyle}>
            {/* Zoom Controls */}
            <div style={zoomControlsStyle} className="zoom-controls">
              <button
                onClick={() => setZoomLevel(prev => Math.max(0.75, prev - 0.1))}
                style={toolIconBtnStyle}
                title="Zoom out"
                disabled={zoomLevel <= 0.75}
              >
                <ZoomOut size={16} />
              </button>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => setZoomLevel(prev => Math.min(1.3, prev + 0.1))}
                style={toolIconBtnStyle}
                title="Zoom in"
                disabled={zoomLevel >= 1.3}
              >
                <ZoomIn size={16} />
              </button>
            </div>

            {/* Like button */}
            <button
              onClick={handleLike}
              className={`pill-btn ${hasLiked ? 'pill-btn-coral' : 'pill-btn-light'}`}
              style={{ padding: '6px 14px', fontSize: '0.86rem', gap: 6 }}
              title="Like this episode"
            >
              <Heart size={16} fill={hasLiked ? '#FFFFFF' : 'none'} color={hasLiked ? '#FFFFFF' : 'var(--accent-coral)'} />
              <span>{likesCount}</span>
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              style={toolIconBtnStyle}
              title={copied ? 'Link copied!' : 'Share comic'}
            >
              {copied ? <Check size={18} color="#2A9D8F" /> : <Share2 size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Comic Strip Canvas */}
      <div className="page-container" style={comicCanvasAreaStyle}>
        <div
          style={{
            maxWidth: `${Math.round(820 * zoomLevel)}px`,
            margin: '0 auto',
            transition: 'max-width 0.2s ease'
          }}
        >
          <div style={stripFrameStyle}>
            <img
              src={comic.strip}
              alt={`${comic.episodeCode} - ${comic.title}`}
              style={stripImageStyle}
            />
          </div>

          {/* Clean Episode Navigation directly below comic */}
          <div className="reader-nav-bar" style={bottomNavBarStyle}>
            {prevComic ? (
              <button
                onClick={() => navigate(`/comics/${prevComic.id}`)}
                className="pill-btn pill-btn-light reader-nav-btn"
                title={`Previous: ${prevComic.title}`}
              >
                <ChevronLeft size={18} />
                <span className="desktop-btn-label">Prev: {prevComic.title}</span>
                <span className="mobile-btn-label">Prev</span>
              </button>
            ) : (
              <div className="nav-btn-spacer" />
            )}

            <Link
              to="/comics"
              className="pill-btn pill-btn-light reader-nav-btn reader-all-btn"
              title="All Episodes"
            >
              <span>All Episodes</span>
            </Link>

            {nextComic ? (
              <button
                onClick={() => navigate(`/comics/${nextComic.id}`)}
                className="pill-btn pill-btn-dark reader-nav-btn"
                title={`Next: ${nextComic.title}`}
              >
                <span className="desktop-btn-label">Next: {nextComic.title}</span>
                <span className="mobile-btn-label">Next</span>
                <ChevronRight size={18} />
              </button>
            ) : (
              <div className="nav-btn-spacer" />
            )}
          </div>
        </div>
      </div>

      <style>{`
        .mobile-btn-label {
          display: none;
        }
        .desktop-btn-label {
          display: inline;
        }
        .reader-nav-btn {
          padding: 8px 18px;
          font-size: 0.88rem;
          gap: 6px;
          white-space: nowrap;
          transition: transform 0.15s ease;
        }
        .reader-nav-btn:hover {
          transform: translateY(-1px);
        }
        .nav-btn-spacer {
          width: 70px;
        }
        @media (max-width: 680px) {
          .mobile-btn-label {
            display: inline !important;
          }
          .desktop-btn-label {
            display: none !important;
          }
          .reader-nav-bar {
            margin-top: 12px !important;
            padding: 8px 10px !important;
            gap: 8px !important;
          }
          .reader-nav-btn {
            padding: 7px 12px !important;
            font-size: 0.8rem !important;
            gap: 4px !important;
          }
          .nav-btn-spacer {
            width: 40px !important;
          }
        }
      `}</style>
    </div>
  );
};

const readerNavWrapperStyle = {
  position: 'sticky',
  top: 'var(--navbar-height)',
  backgroundColor: 'var(--navbar-bg)',
  backdropFilter: 'blur(8px)',
  borderBottom: '1px solid var(--border-card)',
  zIndex: 100,
  padding: '10px 0'
};

const readerNavContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  flexWrap: 'wrap'
};

const backLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  color: 'var(--text-ink)',
  textDecoration: 'none',
  fontSize: '0.92rem'
};

const episodeHeaderCenterStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
};

const readerTitleStyle = {
  fontSize: '1.2rem',
  fontWeight: 700,
  margin: 0,
  color: 'var(--text-ink)'
};

const controlsGroupStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
};

const zoomControlsStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  backgroundColor: 'var(--bg-card)',
  borderRadius: 'var(--radius-pill)',
  padding: '3px 8px',
  border: '1px solid var(--border-card)'
};

const toolIconBtnStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '5px',
  borderRadius: '50%',
  color: 'var(--text-ink)',
  cursor: 'pointer'
};

const comicCanvasAreaStyle = {
  marginTop: '24px'
};

const stripFrameStyle = {
  backgroundColor: 'var(--bg-card)',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 8px 30px rgba(37, 35, 43, 0.08)',
  border: '1px solid var(--border-card)'
};

const stripImageStyle = {
  width: '100%',
  height: 'auto',
  display: 'block'
};

const bottomNavBarStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
  marginTop: '16px',
  padding: '10px 14px',
  backgroundColor: 'var(--bg-card)',
  borderRadius: '16px',
  border: '1px solid var(--border-card)',
  boxShadow: '0 4px 16px rgba(37, 35, 43, 0.06)'
};

const paginationBtnStyle = {
  padding: '10px 18px',
  fontSize: '0.94rem',
  gap: '8px'
};
