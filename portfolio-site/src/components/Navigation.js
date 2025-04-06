import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelopeOpen, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Initialize the active section to 'home' on page load
    setActiveSection('home');
    
    const handleScroll = () => {
      const sections = document.querySelectorAll('section, header');
      let currentSection = 'home';
      let minDistance = Infinity;

      sections.forEach(section => {
        // Calculate how far the section is from being at the top of the viewport
        const sectionTop = section.getBoundingClientRect().top;
        const distance = Math.abs(sectionTop);
        
        // If this section is closer to the top of the viewport than any we've seen so far,
        // and at least part of it is visible on screen, make it the current section
        if (distance < minDistance && (sectionTop < window.innerHeight / 2)) {
          minDistance = distance;
          currentSection = section.id || 'home';
        }
      });

      setActiveSection(currentSection);
    };

    // Run the handleScroll function once on mount to set initial active section
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle('light-mode');
    setIsDarkMode(!isDarkMode);
    
    // Update images based on theme
    const themedImages = document.querySelectorAll('[data-theme-src]');
    themedImages.forEach(image => {
      const lightSrc = image.getAttribute('data-theme-src');
      const originalSrc = image.getAttribute('data-original-src');
      
      if (document.body.classList.contains('light-mode')) {
        image.src = lightSrc;
      } else {
        image.src = originalSrc;
      }
    });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      <button className="theme-btn" onClick={toggleTheme}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      </button>
      
      <div className="controls">
        <button 
          className={`control ${activeSection === 'home' ? 'active-btn' : ''}`}
          onClick={() => scrollToSection('home')}
        >
          <FontAwesomeIcon icon={faHome} />
        </button>
        <button 
          className={`control ${activeSection === 'about' ? 'active-btn' : ''}`}
          onClick={() => scrollToSection('about')}
        >
          <FontAwesomeIcon icon={faUser} />
        </button>
        <button 
          className={`control ${activeSection === 'portfolio' ? 'active-btn' : ''}`}
          onClick={() => scrollToSection('portfolio')}
        >
          <FontAwesomeIcon icon={faBriefcase} />
        </button>
        <button 
          className={`control ${activeSection === 'contact' ? 'active-btn' : ''}`}
          onClick={() => scrollToSection('contact')}
        >
          <FontAwesomeIcon icon={faEnvelopeOpen} />
        </button>
      </div>
    </>
  );
}

export default Navigation; 