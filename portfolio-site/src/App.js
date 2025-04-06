import React, { useEffect } from 'react';
import './assets/styles/styles.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Spacer from './components/Spacer';

function App() {
  useEffect(() => {
    // Set the background color immediately to prevent flashing
    document.documentElement.style.backgroundColor = '#191d2b';
    document.body.style.backgroundColor = '#191d2b';
    
    // Remove preload class after a short delay to enable transitions
    const timer = setTimeout(() => {
      document.body.classList.remove('preload');
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main-content">
      <Header />
      <Spacer />
      <About />
      <Spacer />
      <Portfolio />
      <Spacer />
      <Contact />
      <Navigation />
    </div>
  );
}

export default App;
