import React from 'react';
import { Link } from 'react-router-dom';

export const IdeasBanner = () => {
  return (
    <div style={containerStyle}>
      <Link to="/about" style={linkWrapperStyle} title="Learn about Prof Hootigan">
        <img
          src="./assets/banners/bottomk.png"
          alt="Prof Hootigan — Ideas Take Flight"
          style={bannerImgStyle}
        />
      </Link>
    </div>
  );
};

const containerStyle = {
  margin: '40px 0 20px 0',
  width: '100%'
};

const linkWrapperStyle = {
  display: 'block',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: 'var(--shadow-sm)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  border: '1px solid var(--border-card)'
};

const bannerImgStyle = {
  width: '100%',
  height: 'auto',
  display: 'block'
};
