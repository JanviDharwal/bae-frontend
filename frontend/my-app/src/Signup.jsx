import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import logo from './images/logo.jpg';

export default function SignupScreen() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Get form values
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    console.log('Mock Signup submitted:', { name, email, password });

    // Optional: store in localStorage to simulate login
    localStorage.setItem('mockUser', JSON.stringify({ name, email }));

    // Show success message
    alert(`Signup successful! Welcome, ${name} 💜`);

    // Redirect to login page
    navigate('/');
  };

  return (
    <div className="login-bg">
      <div className="login-card centered">
        <div className="card-inner">
          <img src={logo} alt="BAE logo" className="center-logo" />
          <h1 className="title">Create Account</h1>
          <p className="subtitle">
            Join BAE and experience emotion-driven design 💜
          </p>

          <form className="form" onSubmit={handleSignup}>
            <div className="field">
              <label className="label-text">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="field">
              <label className="label-text">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="field">
              <label className="label-text">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                required
              />
            </div>

            <button type="submit" className="btn">
              Sign Up
            </button>

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
