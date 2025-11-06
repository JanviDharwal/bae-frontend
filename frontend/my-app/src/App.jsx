import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Wardrobe from './Wardrobe';
import Favorites from './Favorites';
import Mood from './Mood';
import Generator from './Generator';
import Upload from './Upload';
import './App.css';
import './moodTheme.css';
import { initMood } from './moodTheme';

function App() {
  useEffect(() => {
    initMood();
  }, []);
  return (
    <BrowserRouter>
      <div id="mood-tint" aria-hidden="true" />
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/mood" element={<Mood />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;