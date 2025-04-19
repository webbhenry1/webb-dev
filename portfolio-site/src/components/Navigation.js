import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelopeOpen, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Start with home section as active
    setActiveSection('home');
    
    // Get all section elements that need to be observed
    const sections = [
      document.getElementById('home'),
      document.getElementById('about'),
      document.getElementById('portfolio'),
      document.getElementById('contact')
    ].filter(Boolean); // Remove any null elements
    
    // Track which sections are in view and their visibility percentage
    const sectionVisibility = {};
    sections.forEach(section => {
      sectionVisibility[section.id] = 0; // Initialize visibility
    });
    
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
      // Prioritize Home section if scrolled near the top
      if (window.scrollY < 100) {
        if (activeSection !== 'home') {
          console.log('Forcing active section to: home (near top)');
          setActiveSection('home');
        }
        return; // Exit early, don't check other sections
      }

      // Update visibility data for each section
      entries.forEach(entry => {
        const id = entry.target.id;
        const visiblePct = entry.intersectionRatio;
        sectionVisibility[id] = visiblePct;
        
        console.log(`Section ${id}: ${Math.round(visiblePct * 100)}% visible`);
      });
      
      // Determine the most visible section (highest intersection ratio)
      let maxSection = 'home';
      let maxVisibility = 0;
      
      Object.entries(sectionVisibility).forEach(([section, visibility]) => {
        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          maxSection = section;
        }
      });
      
      // Only update if we have a section with some visibility and it's different
      if (maxVisibility > 0 && maxSection !== activeSection) {
        console.log(`Changing active section to: ${maxSection}`);
        setActiveSection(maxSection);
      }
    }, {
      // Set threshold array for more granular visibility detection
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      rootMargin: '-5% 0px -5% 0px' // Make detection area closer to actual viewport
    });
    
    // Start observing each section
    sections.forEach(section => {
      observer.observe(section);
    });
    
    // Cleanup observer on component unmount
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []); // Empty dependency array - only run once on mount

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