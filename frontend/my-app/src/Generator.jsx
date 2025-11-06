import React from 'react';
import { Link } from 'react-router-dom';
import './Generator.css';

// Local asset paths used for decorative vectors and icons
const bgVector = '/assets/96c124be02ce741e5e887c950d041f06ecb58bc0.svg';
const avatar = '/assets/9bddb7d3b5cfd4771d686fa89d8f6c6ee437a2e3.svg';
const iconClose = '/assets/d77fbee5257dc4b86a34b7861005606888f5209a.svg';
const iconHeart = '/assets/82bb0b74f4636b29554a1b573810d8ceb5477f0a.svg';
const iconLike = '/assets/6ee0fd8da8dd6dd652c32be7999a87707339e208.svg';
const cardSample = '/assets/00dfdb3573ab5c9d35ff8efd2f7e80ccc58376db.svg';

export default function Generator() {
  return (
    <div className="generator-root">
      <div className="page-bg">
        <img src={bgVector} alt="flow" />
      </div>

      <aside className="left-sidebar">
        <div className="sidebar-inner">
          <div className="brand">
            <div className="logo">BAE</div>
            <div className="tag">Bringing aesthetic to emotion</div>
          </div>

          <nav className="menu">
            <Link to="/dashboard" className="menu-item">
              <span className="mi-icon">🏠</span>
              <span>Home</span>
            </Link>
            <Link to="/profile" className="menu-item"><span className="mi-icon">👤</span><span>Profile</span></Link>
            <Link to="/wardrobe" className="menu-item"><span className="mi-icon">👗</span><span>Wardrobe</span></Link>
            <Link to="/favorites" className="menu-item"><span className="mi-icon">💖</span><span>Favorites</span></Link>
            <Link to="/generator" className="menu-item active"><span className="mi-icon">🧭</span><span>Outfit Generator</span></Link>
            <Link to="/upload" className="menu-item"><span className="mi-icon">⬆️</span><span>Upload Clothes</span></Link>
          </nav>

          <Link to="/profile" className="guest-box">
            <div className="guest-avatar"><img src={avatar} alt="guest"/></div>
            <div className="guest-meta">
              <div className="guest-name">Guest User</div>
              <div className="guest-link">View Profile</div>
            </div>
          </Link>
        </div>
      </aside>

      <main className="generator-main">
        <div className="main-header">
          <h1>Outfit Generator</h1>
          <p className="subtitle">Swipe up to like, swipe down to pass</p>
        </div>

        <div className="content-wrap">
          <section className="center-stage">
            <div className="card-wrapper">
              <div className="swipe-card">
                <div className="card-media" style={{backgroundImage:`url(${cardSample})`}} />
                <div className="card-footer">
                  <div className="footer-left">
                    <div className="outfit-title">Summer Breeze</div>
                    <div className="outfit-tags">White Tee • Blue Jeans • Sneakers</div>
                  </div>
                </div>

                <div className="action-row">
                  <button className="action action-skip"><img src={iconClose} alt="skip"/></button>
                  <button className="action action-neutral">✖️</button>
                  <button className="action action-like"><img src={iconHeart} alt="like"/></button>
                </div>
              </div>
            </div>
          </section>

          <aside className="right-panel">
            <div className="panel glass progress-panel">
              <h4>Progress</h4>
              <div className="stat-row"><span>Liked</span><span>0</span></div>
              <div className="stat-row"><span>Passed</span><span>0</span></div>
              <div className="current-count">1<br/><small>/ 5</small></div>
            </div>

            <div className="panel glass how-panel">
              <h4>How it Works</h4>
              <ul>
                <li>Swipe up to save outfits you love</li>
                <li>Swipe down to skip outfits</li>
                <li>Liked outfits saved to favorites</li>
              </ul>
            </div>

            <div className="panel glass filter-panel">
              <h4>Filters</h4>
              <div className="filters">
                <button className="chip">All Occasions</button>
                <button className="chip">Any Style</button>
                <button className="chip">All Seasons</button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}