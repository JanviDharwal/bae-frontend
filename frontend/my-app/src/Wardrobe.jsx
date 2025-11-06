import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Wardrobe.css';

// Sidebar Assets (from Dashboard)
const imgVector = '/assets/96c124be02ce741e5e887c950d041f06ecb58bc0.svg';
const imgIcon = '/assets/a14a5ec85637de15136cf5c0f1ad5361e1197026.svg';
const imgIcon1 = '/assets/1fde495bfc8797a94134f5d4de167044cf54e494.svg';
const imgIcon2 = '/assets/382d9676769bf6f0a90b76417008e3736e58e992.svg';
const imgIcon3 = '/assets/43120c4e9810cc0b9ba9ddb1eb7b14494973c478.svg';
const imgIcon4 = '/assets/a0ed8c963d3f44517b608e57f64fe4b268d88fb4.svg';
const imgIcon5 = '/assets/977b5fa5f15479286a516d76487da474c05a0e46.svg';
const imgIcon6 = '/assets/eb00d1c750b5111b97b3b0493e80b0ff89e96d61.svg';
const imgIcon7 = '/assets/63a23bc569b2b2d9f5190d92656d65178ae2a981.svg';
const imgProfile = '/assets/9bddb7d3b5cfd4771d686fa89d8f6c6ee437a2e3.svg';

export default function Wardrobe() {
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      localStorage.removeItem('moodPromptShown');
      localStorage.removeItem('detectedMood');
    } catch (e) {}
    navigate('/');
  };

  const items = [
    { title: 'White T-Shirt', category: 'Tops', color: 'White' },
    { title: 'Blue Jeans', category: 'Bottoms', color: 'Blue' },
    { title: 'Black Blazer', category: 'Outerwear', color: 'Black' },
    { title: 'Summer Dress', category: 'Dresses', color: 'Floral' },
    { title: 'Sneakers', category: 'Shoes', color: 'White' },
    { title: 'Leather Jacket', category: 'Outerwear', color: 'Brown' },
    { title: 'Striped Shirt', category: 'Tops', color: 'Navy' },
    { title: 'Chino Pants', category: 'Bottoms', color: 'Beige' },
  ];

  return (
    <div className="dashboard-root">
      {/* SIDEBAR START */}
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">BAE</div>
          <div className="tag">Bringing aesthetic to emotion</div>
        </div>

        <nav className="nav">
          <Link to="/dashboard" className="nav-btn">
            <img src={imgIcon3} alt="home" />
            <span>Home</span>
          </Link>
          <Link to="/wardrobe" className="nav-btn active">
            <img src={imgIcon4} alt="wardrobe" />
            <span>Wardrobe</span>
          </Link>
          <Link to="/favorites" className="nav-btn">
            <img src={imgIcon5} alt="favorites" />
            <span>Favorites</span>
          </Link>
          <Link to="/generator" className="nav-btn">
            <img src={imgIcon6} alt="outfit" />
            <span>Outfit Generator</span>
          </Link>
          <Link to="/upload" className="nav-btn">
            <img src={imgIcon7} alt="upload" />
            <span>Upload Clothes</span>
          </Link>
        </nav>

        <Link to="/profile" className="profile">
          <div className="avatar"><img src={imgProfile} alt="user" /></div>
          <div className="profile-meta">
            <div className="profile-name">Guest User</div>
            <div className="profile-link">View Profile</div>
          </div>
        </Link>

        <button className="nav-btn logout" onClick={handleLogout} style={{ marginTop: 12 }}>
          <span>Log Out</span>
        </button>
      </aside>
      {/* SIDEBAR END */}

      {/* MAIN WARDROBE SECTION */}
      <main className="main-area">
        <div className="wardrobe-inner">
          <header className="wardrobe-header">
            <div>
              <h2>My Wardrobe</h2>
              <p className="muted">12 items in your collection</p>
            </div>

            <div className="header-actions">
              <button className="btn add"><img src={imgIcon} alt="add" /> Add Item</button>
              <button className="btn filter"><img src={imgIcon1} alt="filter" /> Filters</button>
            </div>
          </header>

          <div className="search-row">
            <div className="search-input">
              <img src={imgIcon2} alt="search" />
              <input placeholder="Search your wardrobe..." />
            </div>
          </div>

          <div className="tags-row">
            {['All', 'Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Shoes', 'Accessories'].map((t) => (
              <button key={t} className={`tag ${t === 'All' ? 'active' : ''}`}>{t}</button>
            ))}
          </div>

          <div className="grid">
            {items.map((it, idx) => (
              <article className="card" key={idx}>
                <div className="image" />
                <div className="card-body">
                  <div className="card-title">{it.title}</div>
                  <div className="card-meta">{it.category} • {it.color}</div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Decorative background */}
        <div className="bg-vectors">
          <img src={imgVector} alt="bg-lines" />
        </div>
      </main>
    </div>
  );
}