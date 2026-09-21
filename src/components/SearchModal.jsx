import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, ArrowRight } from 'lucide-react';
import { comics } from '../data/comics';

export const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? comics.filter(
        c =>
          c.title.toLowerCase().includes(query.toLowerCase()) ||
          c.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
          c.episodeCode.toLowerCase().includes(query.toLowerCase()) ||
          c.characters.some(ch => ch.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const handleSelect = (comicId) => {
    onClose();
    navigate(`/comics/${comicId}`);
  };

  return (
    <div style={modalOverlayStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={e => e.stopPropagation()}>
        <div style={inputContainerStyle}>
          <Search size={22} color="var(--text-muted)" />
          <input
            autoFocus
            type="text"
            placeholder="Search comics, characters, episodes..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={inputStyle}
          />
          <button onClick={onClose} style={closeBtnStyle} aria-label="Close search">
            <X size={20} />
          </button>
        </div>

        <div style={resultsContainerStyle}>
          {query.trim() === '' ? (
            <div style={emptyStateStyle}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Try searching for <em>"Rough Day"</em>, <em>"Coffee"</em>, or <em>"Cats"</em>...
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div style={emptyStateStyle}>
              <p style={{ color: 'var(--text-muted)' }}>No episodes found for "{query}"</p>
            </div>
          ) : (
            filtered.map(comic => (
              <div
                key={comic.id}
                onClick={() => handleSelect(comic.id)}
                style={resultCardStyle}
                className="search-item-hover"
              >
                <img
                  src={comic.cover}
                  alt={comic.title}
                  style={thumbStyle}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span className="badge-pill badge-lavender" style={{ fontSize: '0.72rem' }}>
                      {comic.episodeCode}
                    </span>
                    <h4 style={{ fontSize: '1.05rem', margin: 0 }}>{comic.title}</h4>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                    {comic.shortDescription.slice(0, 85)}...
                  </p>
                </div>
                <ArrowRight size={18} color="var(--text-muted)" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const modalOverlayStyle = {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(37, 35, 43, 0.45)',
  backdropFilter: 'blur(4px)',
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '100px',
  paddingLeft: '16px',
  paddingRight: '16px'
};

const modalContentStyle = {
  backgroundColor: '#FFFFFF',
  width: '100%',
  maxWidth: '560px',
  borderRadius: '20px',
  boxShadow: '0 20px 40px rgba(37, 35, 43, 0.18)',
  overflow: 'hidden',
  height: 'fit-content',
  maxHeight: '75vh',
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid var(--border-card)'
};

const inputContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '16px 20px',
  gap: '12px',
  borderBottom: '1px solid var(--border-subtle)'
};

const inputStyle = {
  flex: 1,
  border: 'none',
  outline: 'none',
  fontSize: '1.05rem',
  fontFamily: 'var(--font-body)',
  color: 'var(--text-ink)',
  backgroundColor: 'transparent'
};

const closeBtnStyle = {
  color: 'var(--text-muted)',
  padding: '4px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const resultsContainerStyle = {
  padding: '12px 16px',
  overflowY: 'auto',
  maxHeight: '380px'
};

const emptyStateStyle = {
  padding: '36px 16px',
  textAlign: 'center'
};

const resultCardStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  padding: '10px 12px',
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'background-color 0.15s ease',
  marginBottom: '6px'
};

const thumbStyle = {
  width: '56px',
  height: '42px',
  objectFit: 'cover',
  borderRadius: '8px',
  border: '1px solid var(--border-subtle)'
};
