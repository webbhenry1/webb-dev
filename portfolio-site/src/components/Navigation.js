import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelopeOpen, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Ref to store visibility status from observer
  const sectionVisibility = useRef({});
  // Ref to flag manual scrolling
  const isManualScrolling = useRef(false);
  const scrollTimeoutRef = useRef(null);
  // Ref to track if we need to do a force update
  const forceUpdateRef = useRef(false);

  // Add maximum time for manual flag
  const MAX_MANUAL_SCROLL_TIME = 1000; // 1.5 seconds absolute maximum

  // Function to determine most visible section
  const calculateMostVisibleSection = () => {
    let maxSection = '';
    let maxVisibility = 0; // Start at 0 not -1 to ensure a section is always chosen if visible

    // Find most visible section
    Object.entries(sectionVisibility.current).forEach(([sectionId, visibility]) => {
      if (visibility > maxVisibility) {
        maxVisibility = visibility;
        maxSection = sectionId;
      }
    });

    // Home override for top of page
    if (window.scrollY < 100 && sectionVisibility.current['home'] > 0) {
      maxSection = 'home';
      console.log('Near top, prioritizing home section');
    }

    return { maxSection, maxVisibility };
  };

  // Function to update active section state
  const updateActiveSection = () => {
    // Check if we should reset the manual scrolling flag due to timeout
    if (isManualScrolling.current) {
      const timeElapsed = Date.now() - (isManualScrolling.current === true ? 0 : isManualScrolling.current);
      if (timeElapsed > MAX_MANUAL_SCROLL_TIME) {
        console.log('Manual scrolling flag was active too long, resetting');
        isManualScrolling.current = false;
      }
    }

    // Don't update if manual scrolling is still in progress
    if (isManualScrolling.current) {
      console.log('Manual scrolling active, skipping update');
      return;
    }

    const { maxSection, maxVisibility } = calculateMostVisibleSection();
    
    // Only update if we have a visible section different from current
    if (maxVisibility > 0 && maxSection && maxSection !== activeSection) {
      console.log(`Updating active section to: ${maxSection} (visibility: ${maxVisibility.toFixed(2)})`);
      setActiveSection(maxSection);
    }
  };

  // Setup IntersectionObserver
  useEffect(() => {
    console.log('Setting up observers and listeners');
    
    const sections = [
      document.getElementById('home'),
      document.getElementById('about'),
      document.getElementById('portfolio'),
      document.getElementById('contact')
    ].filter(Boolean);

    // Initialize visibility
    sections.forEach(section => {
      sectionVisibility.current[section.id] = 0;
    });

    // Create IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      let visibilityChanged = false;
      
      // Update visibility data
      entries.forEach(entry => {
        const oldValue = sectionVisibility.current[entry.target.id] || 0;
        const newValue = entry.intersectionRatio;
        
        if (Math.abs(oldValue - newValue) > 0.1) {
          visibilityChanged = true;
        }
        
        sectionVisibility.current[entry.target.id] = newValue;
        console.log(`${entry.target.id}: ${Math.round(newValue * 100)}% visible`);
      });
      
      // Only recalculate if visibility actually changed meaningfully
      if (visibilityChanged) {
        updateActiveSection();
      }
    }, {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], // More thresholds for better detection
      rootMargin: '-5% 0px -5% 0px'
    });

    // Observe all sections
    sections.forEach(section => observer.observe(section));

    // BACKUP: Add scroll listener to ensure updates happen during scrolling
    const handleScroll = () => {
      // Use requestAnimationFrame to throttle and ensure we're in a paint cycle
      if (!isManualScrolling.current) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
        });
      }
    };

    // Add scroll event listener as backup
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      sections.forEach(section => observer.unobserve(section));
      window.removeEventListener('scroll', handleScroll);
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [activeSection]); // Re-create if active section changes

  // Click handling for navigation buttons
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    // Cancel any previous timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Store timestamp along with flag to enable absolute time limit
    isManualScrolling.current = Date.now();
    console.log(`Manual scroll to ${sectionId} started at ${isManualScrolling.current}`);
    
    // Set active section immediately
    setActiveSection(sectionId);
    
    // Scroll to the section
    section.scrollIntoView({ behavior: 'smooth' });
    
    // Clear manual scrolling flag after animation likely completes
    scrollTimeoutRef.current = setTimeout(() => {
      isManualScrolling.current = false;
      scrollTimeoutRef.current = null;
      console.log('Manual scroll ended, resuming observer updates');
      
      // Force checks after scrolling ends
      updateActiveSection();
      setTimeout(() => updateActiveSection(), 100);
      setTimeout(() => updateActiveSection(), 300);
    }, 1200);
  };

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