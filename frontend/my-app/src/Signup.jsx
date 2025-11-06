import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import logo from './images/logo.jpg';

export default function SignupScreen() {
  const navigate = useNavigate();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        alert(json.message || 'Signup successful');
        navigate('/');
      } else {
        setError(json.message || 'Signup failed');
      }
    } catch (err) {
      console.error('Signup error', err);
      setError('Server error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card centered">
        <div className="card-inner">
          <img src={logo} alt="BAE logo" className="center-logo" />
          {/* Title */}
          <h1 className="title">Create Account</h1>
          <p className="subtitle">
            Join BAE and experience emotion-driven design 💜
          </p>

          {/* Signup Form */}
          <form className="form" onSubmit={handleSignup}>
            <div className="field">
              <label className="label-text">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label className="label-text">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label className="label-text">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn" disabled={loading}>
              {loading ? 'Signing up…' : 'Sign Up'}
            </button>
            {error && <div style={{ color: 'crimson', marginTop: 8 }}>{error}</div>}

            <div className="signup">
              Already have an account?
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                }}
                className="link"
              >
                &nbsp;Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}