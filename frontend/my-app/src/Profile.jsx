import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const avatar = '/assets/9bddb7d3b5cfd4771d686fa89d8f6c6ee437a2e3.svg';

export default function Profile() {
  return (
    <div className="profile-page-root">
      {/* left sidebar space to match Dashboard layout */}
      <div className="sidebar-space" />

      {/* main content area */}
      <div className="profile-main">
        <div className="profile-card large">
          <div className="profile-header">
            <div className="avatar-wrap">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="profile-info">
              <div className="name">Guest User</div>
              <div className="role">View Profile</div>
            </div>
          </div>

          <div className="profile-body">
            <h3>About</h3>
            <p className="muted">This profile view mirrors the Figma frame — it leaves sidebar space on the left and shows the same card styling. Replace this placeholder content with real user data when ready.</p>

            <div className="actions">
              <button className="btn">Edit profile</button>
              <Link to="/dashboard" className="link back">Back to dashboard</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}