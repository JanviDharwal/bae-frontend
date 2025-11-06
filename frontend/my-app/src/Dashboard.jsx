import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Dashboard.css";
import MoodPrompt from './MoodPrompt';

export default function Dashboard() {
  const navigate = useNavigate();
  const [showMoodPrompt, setShowMoodPrompt] = useState(false);
  const [currentMood, setCurrentMood] = useState(null); // 🆕 store detected mood

  useEffect(() => {
    try {
      const just = localStorage.getItem('justLoggedIn');
      if (just === 'true') {
        setShowMoodPrompt(true);
        localStorage.removeItem('justLoggedIn');
      }

      // 🆕 If mood was already detected before, show it again
      const savedMood = localStorage.getItem('detectedMood');
      if (savedMood) setCurrentMood(savedMood);
    } catch (e) {}
  }, []);

  function handleAutoDetect(mood) {
    console.log('Auto-detected mood:', mood);
    try {
      localStorage.setItem('moodPromptShown', 'true');
      localStorage.setItem('detectedMood', mood); // 🆕 save it for later
    } catch (e) {}
    setCurrentMood(mood); // 🆕 display it on dashboard
    setShowMoodPrompt(false);
  }

  function handleManual() {
    try {
      localStorage.setItem('moodPromptShown', 'true');
    } catch (e) {}
    setShowMoodPrompt(false);
    navigate('/mood');
  }

  function handleLogout() {
    try {
      localStorage.removeItem('moodPromptShown');
      localStorage.removeItem('detectedMood');
    } catch (e) {}
    navigate('/');
  }

  return (
    <div className="dashboard-root">
      <aside className="sidebar">
        <div className="brand">
          <p className="tag">Bringing aesthetic to emotion</p>
        </div>
        <nav className="nav">
          <Link to="/dashboard" className="nav-btn active">Dashboard</Link>
          <Link to="/wardrobe" className="nav-btn">Wardrobe</Link>
          <Link to="/favorites" className="nav-btn">Favorites</Link>
          <Link to="/generator" className="nav-btn">Outfit Generator</Link>
          <Link to="/upload" className="nav-btn">Upload Clothes</Link>
        </nav>
        <div className="profile">
          <div className="profile-meta">
            <div className="profile-name">Navneet Kaur</div>
            <div className="profile-link">UI/UX Designer</div>
          </div>
          <button className="logout" onClick={handleLogout}>Logout</button>
        </div>
      </aside>

      <main className="main-area">
        <div className="main-inner">
          <div className="heading">
            <h1>Welcome Back!</h1>
            <p className="sub">Here’s what’s happening with your wardrobe today</p>
          </div>

          {/* 🆕 Mood message here */}
          {currentMood && (
            <div className="mood-message">
              <h2>Today's Detected Mood: <span>{currentMood}</span> 🌤️</h2>
            </div>
          )}

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">Items in Wardrobe</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">Favorites Saved</div>
            </div>
          </div>

          <div className="lower-grid">
            <div className="panel">
              <h3>Quick Actions</h3>
              <div className="action-list">
                <div className="action">View Wardrobe Items</div>
                <div className="action">Upload New Item</div>
                <div className="action">Generate New Outfit</div>
              </div>
            </div>

            <div className="panel">
              <h3>Today's Mood</h3>
              <p className="muted">Your vibe sets the tone! Detect or choose your mood.</p>
              <div className="action-list">
                <div
                  className="action detect"
                  role="button"
                  tabIndex={0}
                  onClick={() => setShowMoodPrompt(true)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setShowMoodPrompt(true); }}
                >
                  Detect My Mood
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {showMoodPrompt && (
        <MoodPrompt
          onAutoDetect={handleAutoDetect}
          onManual={handleManual}
          onClose={() => setShowMoodPrompt(false)}
        />
      )}
    </div>
  );
}
