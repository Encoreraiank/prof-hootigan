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

          {/* Sticky Note thought beneath comic */}
          {comic.stickyNote && (
            <div style={stickyNoteCardStyle}>
              <div style={pinThumbStyle} />
              <p style={stickyTextStyle}>"{comic.stickyNote}"</p>
            </div>
          )}
        </div>
      </div>

      {/* 3. Bottom Episode Pagination */}
      <div className="page-container" style={{ marginTop: '36px' }}>
        <div style={bottomNavBarStyle}>
          {prevComic ? (
            <button
              onClick={() => navigate(`/comics/${prevComic.id}`)}
              className="pill-btn pill-btn-light"
              style={paginationBtnStyle}
            >
              <ChevronLeft size={20} />
              <span>Previous: {prevComic.title}</span>
            </button>
          ) : (
            <div />
          )}

          {nextComic ? (
            <button
              onClick={() => navigate(`/comics/${nextComic.id}`)}
              className="pill-btn pill-btn-dark"
              style={paginationBtnStyle}
            >
              <span>Next: {nextComic.title}</span>
              <ChevronRight size={20} />
            </button>
          ) : (
            <Link to="/comics" className="pill-btn pill-btn-dark" style={paginationBtnStyle}>
              <span>All Episodes</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const readerNavWrapperStyle = {
  position: 'sticky',
  top: 'var(--navbar-height)',
  backgroundColor: 'rgba(248, 244, 236, 0.96)',
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
  backgroundColor: '#FFFFFF',
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
  backgroundColor: '#FFFFFF',
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

const stickyNoteCardStyle = {
  position: 'relative',
  backgroundColor: '#FFFBEA',
  border: '1px solid #EFE4B5',
  borderRadius: '12px',
  padding: '18px 24px',
  margin: '24px auto 10px auto',
  maxWidth: '460px',
  textAlign: 'center',
  boxShadow: '0 4px 14px rgba(37, 35, 43, 0.04)',
  transform: 'rotate(-1deg)'
};

const pinThumbStyle = {
  position: 'absolute',
  top: '-7px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '32px',
  height: '14px',
  backgroundColor: 'rgba(235, 200, 140, 0.7)',
  borderRadius: '2px'
};

const stickyTextStyle = {
  fontFamily: 'var(--font-hand)',
  fontSize: '1.4rem',
  color: '#4B4232',
  margin: 0,
  lineHeight: '1.2'
};

const bottomNavBarStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  padding: '14px 20px',
  backgroundColor: '#FFFFFF',
  borderRadius: '16px',
  border: '1px solid var(--border-card)',
  boxShadow: 'var(--shadow-sm)'
};

const paginationBtnStyle = {
  padding: '10px 18px',
  fontSize: '0.94rem',
  gap: '8px'
};
