import React from 'react';
import { Link } from 'react-router-dom';
import './Favorites.css';

// Assets (local copies should be placed in public/assets via the provided script)
const imgVector = '/assets/96c124be02ce741e5e887c950d041f06ecb58bc0.svg';
const imgVector1 = '/assets/0872ac62644e46e6823d5a4ca0c6ad8809119a86.svg';
const imgVector2 = '/assets/03e87810933a19fc9a69ec70a0c3f1d49aa68b55.svg';
const imgVector3 = '/assets/57b67c3f4acec17a1a26c3c0ad4d65939909d7f8.svg';
const imgVector4 = '/assets/36781dcb069eee1dc50014c37a829c054db6933f.svg';
const imgVector5 = '/assets/8d53aeae74e0d84113fa927c7c29a39ae787610e.svg';
const imgVector6 = '/assets/f12bb9af624dae553add41b78b76597c0c702496.svg';
const imgVector7 = '/assets/eea28e089be2389be2c90753cffcb8b6dd7d3979.svg';
const imgIcon = '/assets/72cf818273b8466c6234158339dd156c59835a4b.svg';
const imgVector8 = '/assets/40b2f0526240e4b961354a5976d85ffc7c7f1149.svg';
const imgVector9 = '/assets/036e6eefe9bd2c6a411e3de6e2b3737f0cf81e28.svg';
const imgVector10 = '/assets/fe14d6cc9d376d0f0a4fb0ff78c57ea3107fe480.svg';
const imgVector11 = '/assets/48df9d08e7bd00797fbc939e7c7cc9147cd530a6.svg';
const imgIcon1 = '/assets/b2f8ac33cd1df788e98732f7614d221d010b0a25.svg';
const imgIcon2 = '/assets/55dc1cac9835d19f75c8514018a9660508b6a08e.svg';
const imgIcon3 = '/assets/7f3f1451ef6076e0221b220450c79a4385f03606.svg';
const imgIcon4 = '/assets/437995b096a0406fcb7610cabef1231de7ed8f70.svg';
const imgIcon5 = '/assets/1134a297036de2ee192426361c905b52f25639b8.svg';
const imgIcon6 = '/assets/3ff9976ab2747692ee54a467e5339c5ee1ea9631.svg';
const imgIcon7 = '/assets/9bddb7d3b5cfd4771d686fa89d8f6c6ee437a2e3.svg';

const cards = [
  { title: 'Summer Casual', items: 3, tag: 'Summer' },
  { title: 'Office Professional', items: 4, tag: 'All Season' },
  { title: 'Evening Elegance', items: 3, tag: 'Winter' },
  { title: 'Weekend Vibes', items: 2, tag: 'Spring' },
  { title: 'Date Night', items: 3, tag: 'All Season' },
  { title: 'Gym Ready', items: 2, tag: 'All Season' }
];

export default function Favorites() {
  return (
    <div className="favorites-root">
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">BAE</div>
          <div className="tag">Bringing aesthetic to emotion</div>
        </div>

        <nav className="nav">
          <Link to="/dashboard" className="nav-btn">
            <img src={imgIcon1} alt="home" />
            <span>Home</span>
          </Link>
          <Link to="/profile" className="nav-btn">
            <img src={imgIcon2} alt="profile" />
            <span>Profile</span>
          </Link>
          <Link to="/wardrobe" className="nav-btn">
            <img src={imgIcon3} alt="wardrobe" />
            <span>Wardrobe</span>
          </Link>
          <Link to="/favorites" className="nav-btn active">
            <img src={imgIcon4} alt="favorites" />
            <span>Favorites</span>
          </Link>
          <Link to="/generator" className="nav-btn">
            <img src={imgIcon5} alt="outfit" />
            <span>Outfit Generator</span>
          </Link>
          <Link to="/upload" className="nav-btn">
            <img src={imgIcon6} alt="upload" />
            <span>Upload Clothes</span>
          </Link>
        </nav>

        <Link to="/profile" className="profile">
          <div className="avatar"><img src={imgIcon7} alt="user" /></div>
          <div className="profile-meta">
            <div className="profile-name">Guest User</div>
            <div className="profile-link">View Profile</div>
          </div>
        </Link>
      </aside>

      <main className="main-area">
        <div className="main-inner">
          <header className="favorites-header">
            <div className="heading-left">
              <h1>Favorites</h1>
              <p className="sub">{cards.length} favorite outfits saved</p>
            </div>
            <div>
              <button className="btn-create">
                <img src={imgIcon} alt="create" />
                <span>Create Outfit</span>
              </button>
            </div>
          </header>

          <section className="cards-grid">
            {cards.map((c, i) => (
              <article key={i} className="fav-card">
                <div className="card-image">
                  {/* decorative gradient / fallback image */}
                  <img src={imgVector6} alt="outfit" />
                </div>
                <div className="card-body">
                  <div className="card-title">{c.title}</div>
                  <div className="card-tags">
                    <span className="pill">{c.items} items</span>
                    <span className="pill">{c.tag}</span>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>

        <div className="bg-vectors">
          <img src={imgVector} alt="bg-lines" />
        </div>
      </main>
    </div>
  );
}