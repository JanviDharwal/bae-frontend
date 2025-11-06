import React from 'react';

export default function WelcomeFrame({ title = 'Welcome', subtitle = 'Please sign in to your account' }) {
  return (
    <div className="welcome-frame">
      <h1 className="title">{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
}