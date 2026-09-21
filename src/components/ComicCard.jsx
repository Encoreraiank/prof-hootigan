import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const ComicCard = ({ comic }) => {
  const navigate = useNavigate();

  return (
    <div
      className="comic-card-container card-box"
      onClick={() => navigate(`/comics/${comic.id}`)}
      style={cardContainerStyle}
    >
      {/* Thumbnail with Episode Badge */}
      <div style={thumbWrapperStyle}>
        <img
          src={comic.cover}
          alt={`${comic.episodeCode} - ${comic.title}`}
          style={imageStyle}
          loading="lazy"
        />
        <span className="badge-pill badge-lavender" style={badgeStyle}>
          {comic.episodeCode}
        </span>
      </div>

      {/* Card Info: Title + Arrow */}
      <div style={contentRowStyle}>
        <h3 style={titleStyle}>{comic.title}</h3>
        <button
          className="card-arrow-btn"
          style={arrowBtnStyle}
          aria-label={`Read ${comic.title}`}
        >
          <ArrowRight size={18} />
        </button>
      </div>

      <style>{`
        .comic-card-container {
          cursor: pointer;
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s ease, border-color 0.22s ease;
        }
        .comic-card-container:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(37, 35, 43, 0.09);
          border-color: rgba(37, 35, 43, 0.22);
        }
        .comic-card-container:hover .card-arrow-btn {
          background-color: var(--text-ink);
          color: #FFFFFF;
          transform: translateX(2px);
        }
        @media (max-width: 768px) {
          .comic-card-container h3 {
            font-size: 1.05rem !important;
          }
        }
      `}</style>
    </div>
  );
};

const cardContainerStyle = {
  backgroundColor: '#FFFFFF',
  borderRadius: '18px',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
};

const thumbWrapperStyle = {
  position: 'relative',
  width: '100%',
  borderRadius: '14px',
  overflow: 'hidden',
  backgroundColor: '#F3EFE6',
  aspectRatio: '1/1'
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block'
};

const badgeStyle = {
  position: 'absolute',
  top: '10px',
  left: '10px',
  backgroundColor: 'rgba(239, 230, 250, 0.94)',
  backdropFilter: 'blur(4px)',
  color: '#4B367C',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  fontSize: '0.74rem'
};

const contentRowStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '4px 4px 4px 4px'
};

const titleStyle = {
  fontSize: '1.2rem',
  fontWeight: 600,
  fontFamily: 'var(--font-display)',
  color: 'var(--text-ink)',
  margin: 0
};

const arrowBtnStyle = {
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  backgroundColor: '#EBE6F5',
  color: 'var(--text-ink)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',
  flexShrink: 0
};
