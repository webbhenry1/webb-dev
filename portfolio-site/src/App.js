import React from 'react';
import './assets/styles/styles.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Spacer from './components/Spacer';

function App() {
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
