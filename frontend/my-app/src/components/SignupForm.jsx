

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignupForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirm) {
      alert('Passwords do not match');
      return;
    }
    if (!acceptTerms) {
      alert('Please accept the terms to continue');
      return;
    }
    if (onSubmit) onSubmit({ name, email, password, confirm, acceptTerms });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="field">
        <span className="label-text">Full name</span>
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          required
        />
      </label>

      <label className="field">
        <span className="label-text">Email</span>
        <input
          className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </label>

      <label className="field">
        <span className="label-text">Password</span>
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create a password"
          required
        />
      </label>

      <label className="field">
        <span className="label-text">Confirm password</span>
        <input
          className="input"
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          placeholder="Repeat your password"
          required
        />
      </label>

      <div className="row between" style={{ marginTop: 6 }}>
        <label className="remember">
          <input
            type="checkbox"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
          />
          <span>I agree to the terms</span>
        </label>
      </div>

      <button type="submit" className="btn">Create account</button>

      <p className="signup">Already have an account? <Link to="/" className="link">Sign in</Link></p>
    </form>
  );
}