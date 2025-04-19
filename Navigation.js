import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faBriefcase, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Set home as active initially
    setActiveSection('home');

    // Get all section elements that need to be observed
    const sections = [
      document.getElementById('home'),
      document.getElementById('about'),
      document.getElementById('portfolio'),
      document.getElementById('contact')
    ].filter(Boolean);

    // Create an object to store visibility percentage for each section
    const sectionVisibility = {};
    sections.forEach(section => {
      sectionVisibility[section.id] = 0;
    });

    // Create an intersection observer to track when sections are in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const sectionId = entry.target.id;
        const visiblePct = entry.intersectionRatio;
        sectionVisibility[sectionId] = visiblePct;
        console.log(`Section ${sectionId}: ${Math.round(visiblePct * 100)}% visible`);
      });

      // Determine the most visible section
      let maxSection = 'home';
      let maxVisibility = 0;
      
      Object.entries(sectionVisibility).forEach(([sectionId, visibility]) => {
        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          maxSection = sectionId;
        }
      });
      
      // Special case for home section - if we're at the top of the page and home is visible at all
      if (window.scrollY < 100 && sectionVisibility.home > 0) {
        maxSection = 'home';
      }
      
      // Only update if we have meaningful visibility and it's different than current
      if (maxVisibility > 0 && maxSection !== activeSection) {
        console.log(`Changing active section to: ${maxSection}`);
        setActiveSection(maxSection);
      }
    }, {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      rootMargin: '-5% 0px -5% 0px' // Add some margin to prevent edge cases
    });

    // Start observing all sections
    sections.forEach(section => {
      observer.observe(section);
    });

    // Clean up observer when component unmounts
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Handle manual navigation to sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // Force the active section to be the one we're scrolling to
      setActiveSection(sectionId);
    }
  };

  // Toggle dark/light mode
  const toggleTheme = () => {
    document.body.classList.toggle('light-mode');
    setIsDarkMode(!isDarkMode);
    
    // Update theme-dependent images if any
    document.querySelectorAll('[data-theme-src]').forEach(img => {
      const themeSrc = img.getAttribute('data-theme-src');
      const originalSrc = img.getAttribute('data-original-src');
      if (document.body.classList.contains('light-mode')) {
        img.src = themeSrc;
      } else {
        img.src = originalSrc;
      }
    });
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
          <FontAwesomeIcon icon={faHouse} />
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