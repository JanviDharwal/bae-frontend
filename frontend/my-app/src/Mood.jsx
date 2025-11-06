import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Mood.css';
import MoodPrompt from './MoodPrompt';
import { setMood } from './moodTheme';

// MCP assets (local copies expected in public/assets)
const imgVector = '/assets/9c4d4fecde8bbb47dac2042c0cc8097f98689bfe.svg';
const imgVector8 = '/assets/14452e96a59325d345635764e62c9e3b15f6cbc4.svg';
const imgVector12 = '/assets/47265a9ad1f884b5485f5415e8155517284c2e39.svg';

const moods = [
  { id: 'happy', title: 'Happy', desc: 'Bright & Cheerful', colorClass: 'mood-happy' },
  { id: 'neutral', title: 'Neutral', desc: 'Balanced & Calm', colorClass: 'mood-neutral' },
  { id: 'sad', title: 'Sad', desc: 'Soft & Comforting', colorClass: 'mood-sad' }
];

export default function Mood() {
  const navigate = useNavigate();
  const [showPrompt, setShowPrompt] = useState(false);

  function handleAutoDetect() {
    setShowPrompt(true);
  }

  function handleManualSelect(mood) {
    setMood(mood);
    navigate('/dashboard');
  }

  return (
    <div className="mood-root">
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">BAE</div>
          <div className="tag">Bringing aesthetic to emotion</div>
        </div>

        <nav className="nav">
          <Link to="/dashboard" className="nav-btn">Home</Link>
          <Link to="/profile" className="nav-btn">Profile</Link>
          <Link to="/wardrobe" className="nav-btn">Wardrobe</Link>
          <Link to="/favorites" className="nav-btn">Favorites</Link>
          <Link to="/generator" className="nav-btn">Outfit Generator</Link>
          <Link to="/upload" className="nav-btn">Upload Clothes</Link>
        </nav>
      </aside>

      <main className="main-area">
        <div className="main-inner">
          <header className="mood-header">
            <div>
              <h1>Mood Detection</h1>
              <p className="sub">Let your mood guide your style</p>
            </div>
          </header>

          <section className="prompt-card">
            <div className="prompt-inner">
              <div className="mood-icon">
                <img src={imgVector8} alt="mood icon" />
              </div>
              <h2>How are you feeling today?</h2>
              <p className="muted">Select your current mood or let us detect it using your webcam</p>
              <div className="actions-row">
                <button className="btn auto" onClick={handleAutoDetect}>
                  Auto-Detect My Mood
                </button>
              </div>
            </div>
          </section>

          <section className="mood-cards">
            {moods.map((m) => (
              <article key={m.id} className={`mood-card ${m.colorClass}`}>
                <div className="mood-card-inner">
                  <div className="mood-icon-spot">
                    <img src={imgVector12} alt="icon" />
                  </div>
                  <div className="mood-title">{m.title}</div>
                  <div className="mood-desc">{m.desc}</div>
                  <div className="mood-select">
                    <button className="btn select" onClick={() => handleManualSelect(m.id)}>
                      Select
                    </button>
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

      {/* Camera Popup */}
      {showPrompt && (
        <MoodPrompt
          onAutoDetect={(mood) => {
            setMood(mood);
            setShowPrompt(false);
            navigate('/dashboard');
          }}
          onManual={() => setShowPrompt(false)}
          onClose={() => setShowPrompt(false)}
        />
      )}
    </div>
  );
}
