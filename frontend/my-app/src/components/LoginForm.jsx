import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) onSubmit({ email, password });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="field">
        <span className="label-text">Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="input"
          required
        />
      </label>

      <label className="field">
        <span className="label-text">Password</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="input"
          required
        />
      </label>

      <button type="submit" className="btn">Sign In</button>

      <p className="signup">Don't have an account? <Link to="/signup" className="link">Sign up</Link></p>
    </form>
  );
}