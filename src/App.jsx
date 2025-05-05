// src/App.jsx
import React from 'react';
import Rooms from './components/Rooms';
import Pricing from './components/Pricing';
import HeroSection from './components/HeroSection';
import Home from './pages/Home';
import SignUpPage from './pages/SignUpPage';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <Home />

      

      {/* Rooms Section */}
      <section id="rooms" className="my-5">
        <Rooms />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="my-5">
        <Pricing />
      </section>
    </div>
  );
}

export default App;
