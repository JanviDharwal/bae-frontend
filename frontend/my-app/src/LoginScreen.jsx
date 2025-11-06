
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginScreen.css';
import WelcomeFrame from './WelcomeFrame';
import LoginForm from './components/LoginForm';
import BackgroundLines from './components/BackgroundLines';
import logo from './images/logo.jpg';

export default function LoginScreen() {
  const navigate = useNavigate();

  const handleLogin = (values) => {
    console.log('Login submitted', values);
    if (values.email && values.password) {
      try {
        localStorage.removeItem('moodPromptShown');
      } catch (e) {}
      navigate('/dashboard');
    } else {
      alert('Please fill in both fields');
    }
  };


  return (
    <div className="login-bg">
      <BackgroundLines />
      <div className="login-card" role="main" aria-label="Login">
        <div className="card-inner">
          <img src={logo} alt="BAE logo" className="center-logo" />
          <WelcomeFrame />

          <LoginForm onSubmit={handleLogin} />
        </div>
      </div>
    </div>
  );
}