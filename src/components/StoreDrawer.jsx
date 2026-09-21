import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ShoppingBag, Sparkles, Heart } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const StoreDrawer = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useStore();
  const navigate = useNavigate();

  if (!isDrawerOpen) return null;

  const handleGoToFeed = () => {
    setIsDrawerOpen(false);
    navigate('/about');
    setTimeout(() => {
      const el = document.querySelector('.feed-hootigan-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div style={overlayStyle} onClick={() => setIsDrawerOpen(false)}>
      <div style={modalStyle} onClick={e => e.stopPropagation()}>
        <div style={headerStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <ShoppingBag size={22} color="var(--text-ink)" />
            <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Prof Hootigan Store</h3>
          </div>
          <button
            onClick={() => setIsDrawerOpen(false)}
            style={closeBtnStyle}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div style={bodyStyle}>
          <img
            src="./assets/branding/logo-icon.png"
            alt="Prof Hootigan Owl"
            style={{ width: 72, height: 72, margin: '0 auto 16px auto', display: 'block' }}
          />

          <span className="badge-pill badge-lavender" style={{ alignSelf: 'center', marginBottom: 12 }}>
            COMING SOON
          </span>

          <h3 style={{ fontSize: '1.35rem', marginBottom: 8, color: 'var(--text-ink)' }}>
            Official Merch in the Works!
          </h3>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: 24 }}>
            We're currently preparing high-quality archival art prints, sticker packs, and cozy coffee mugs for <strong>Catastrophe Club</strong>.
          </p>

          <div style={previewBoxStyle}>
            <div style={previewItemStyle}>
              <span>🎨 Art Prints</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Season 1 posters</span>
            </div>
            <div style={previewItemStyle}>
              <span>✨ Vinyl Stickers</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Die-cut cat pack</span>
            </div>
            <div style={previewItemStyle}>
              <span>☕ Ceramic Mugs</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Paws. Pause. Recharge.</span>
            </div>
          </div>

          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <button
              className="pill-btn pill-btn-dark"
              onClick={handleGoToFeed}
              style={{ width: '100%', padding: '12px', fontSize: '0.95rem' }}
            >
              <span>Feed Pumpkin Seeds Instead 🎃</span>
            </button>
            <button
              className="pill-btn pill-btn-light"
              onClick={() => setIsDrawerOpen(false)}
              style={{ width: '100%', padding: '10px', fontSize: '0.9rem' }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const overlayStyle = {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(37, 35, 43, 0.45)',
  backdropFilter: 'blur(4px)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px'
};

const modalStyle = {
  backgroundColor: '#FFFFFF',
  borderRadius: '24px',
  width: '100%',
  maxWidth: '440px',
  boxShadow: '0 20px 50px rgba(37, 35, 43, 0.2)',
  border: '1px solid var(--border-card)',
  overflow: 'hidden'
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '18px 24px',
  borderBottom: '1px solid var(--border-subtle)'
};

const closeBtnStyle = {
  padding: '6px',
  borderRadius: '50%',
  color: 'var(--text-muted)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const bodyStyle = {
  padding: '28px 24px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column'
};

const previewBoxStyle = {
  backgroundColor: 'var(--bg-cream)',
  borderRadius: '16px',
  padding: '14px 18px',
  border: '1px solid var(--border-subtle)',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  textAlign: 'left'
};

const previewItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '0.92rem',
  fontWeight: 600,
  color: 'var(--text-ink)'
};
