import React, { useState } from 'react';
import { products } from '../data/products';
import { useStore } from '../context/StoreContext';
import { ShoppingBag, Star, Check, Sparkles } from 'lucide-react';
import { FeedTheHootigan } from '../components/FeedTheHootigan';

export const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedItem, setAddedItem] = useState(null);
  const { addToCart } = useStore();

  const categories = ['All', 'Prints', 'Drinkware', 'Stickers', 'Pins', 'Support'];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    setAddedItem(product.id);
    setTimeout(() => setAddedItem(null), 1500);
  };

  return (
    <div className="store-page page-container" style={{ paddingBottom: '50px' }}>
      {/* Header Banner */}
      <div style={headerContainerStyle}>
        <span style={badgeStyle}>OFFICIAL MERCHANDISE</span>
        <h1 style={titleStyle}>Prof Hootigan Shop</h1>
        <p style={subtitleStyle}>
          Handcrafted prints, cozy mugs, waterproof stickers, and seeds to bring a touch of Catastrophe Club into your home.
        </p>
      </div>

      {/* Category Pills Filter */}
      <div style={filterScrollStyle}>
        <div style={filterGroupStyle}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`pill-btn ${selectedCategory === cat ? 'pill-btn-dark' : 'pill-btn-light'}`}
              style={{ padding: '8px 20px', fontSize: '0.92rem' }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div style={productGridStyle}>
        {filteredProducts.map(product => (
          <div key={product.id} className="card-box" style={productCardStyle}>
            {/* Image Container */}
            <div style={productImageWrapperStyle}>
              <img
                src={product.image}
                alt={product.name}
                style={productImgStyle}
              />
              <span className="badge-pill badge-lavender" style={catBadgeStyle}>
                {product.category}
              </span>
            </div>

            {/* Info */}
            <div style={productInfoStyle}>
              <div style={ratingRowStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Star size={14} fill="#F4A261" color="#F4A261" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{product.rating}</span>
                </div>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  ({product.reviewsCount} reviews)
                </span>
              </div>

              <h3 style={productTitleStyle}>{product.name}</h3>
              <p style={productTaglineStyle}>{product.tagline}</p>

              <p style={productDescStyle}>{product.description}</p>

              <div style={priceActionRowStyle}>
                <div>
                  <span style={priceLabelStyle}>Price</span>
                  <span style={priceValueStyle}>${product.price.toFixed(2)}</span>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className={`pill-btn ${addedItem === product.id ? 'pill-btn-coral' : 'pill-btn-dark'}`}
                  style={{ padding: '10px 18px', fontSize: '0.9rem' }}
                >
                  {addedItem === product.id ? (
                    <>
                      <Check size={16} /> Added
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={16} /> Add to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Support section at the bottom */}
      <div style={{ marginTop: '60px' }}>
        <FeedTheHootigan compact={false} />
      </div>
    </div>
  );
};

const headerContainerStyle = {
  textAlign: 'center',
  maxWidth: '680px',
  margin: '36px auto 30px auto'
};

const badgeStyle = {
  fontSize: '0.78rem',
  letterSpacing: '0.14em',
  fontWeight: 700,
  color: '#766099',
  marginBottom: '8px',
  display: 'inline-block'
};

const titleStyle = {
  fontSize: '2.8rem',
  fontWeight: 700,
  color: 'var(--text-ink)',
  margin: '0 0 12px 0'
};

const subtitleStyle = {
  fontSize: '1.05rem',
  color: 'var(--text-muted)',
  lineHeight: '1.6'
};

const filterScrollStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '36px',
  overflowX: 'auto',
  paddingBottom: '8px'
};

const filterGroupStyle = {
  display: 'flex',
  gap: '10px'
};

const productGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
  gap: '28px'
};

const productCardStyle = {
  backgroundColor: '#FFFFFF',
  borderRadius: '20px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  padding: '16px'
};

const productImageWrapperStyle = {
  position: 'relative',
  borderRadius: '14px',
  overflow: 'hidden',
  backgroundColor: 'var(--bg-cream)',
  aspectRatio: '4/3',
  marginBottom: '16px',
  border: '1px solid var(--border-subtle)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const productImgStyle = {
  maxWidth: '85%',
  maxHeight: '85%',
  objectFit: 'contain',
  display: 'block',
  transition: 'transform 0.25s ease'
};

const catBadgeStyle = {
  position: 'absolute',
  top: '12px',
  left: '12px',
  fontSize: '0.75rem'
};

const productInfoStyle = {
  display: 'flex',
  flexDirection: 'column',
  flex: 1
};

const ratingRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '8px'
};

const productTitleStyle = {
  fontSize: '1.22rem',
  fontWeight: 700,
  margin: '0 0 4px 0',
  color: 'var(--text-ink)'
};

const productTaglineStyle = {
  fontSize: '0.88rem',
  color: 'var(--accent-coral)',
  fontWeight: 600,
  marginBottom: '10px'
};

const productDescStyle = {
  fontSize: '0.9rem',
  color: 'var(--text-muted)',
  lineHeight: '1.55',
  marginBottom: '20px',
  flex: 1
};

const priceActionRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: '14px',
  borderTop: '1px solid var(--border-subtle)'
};

const priceLabelStyle = {
  display: 'block',
  fontSize: '0.75rem',
  color: 'var(--text-muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.05em'
};

const priceValueStyle = {
  fontSize: '1.35rem',
  fontWeight: 700,
  fontFamily: 'var(--font-display)',
  color: 'var(--text-ink)'
};
