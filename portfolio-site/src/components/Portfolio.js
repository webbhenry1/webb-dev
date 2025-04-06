import React, { useEffect, useState } from 'react';

function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Check initial theme
    setIsDarkMode(document.body.classList.contains('light-mode'));
    
    // Set up observer for theme changes
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          setIsDarkMode(document.body.classList.contains('light-mode'));
        }
      });
    });
    
    observer.observe(document.body, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  // Import all images
  const ccImage = require("../assets/img/CC.png");
  const ccDarkImage = require("../assets/img/CC_dark.png");
  const ppImage = require("../assets/img/PP.png");
  const ppDarkImage = require("../assets/img/PP_dark.png");
  const ffImage = require("../assets/img/small_FF.png");
  const vwImage = require("../assets/img/VW.png");

  return (
    <section className="container portfolio fullscreen-section" id="portfolio">
      <div className="main-title">
        <h2>Personal <span>Projects</span></h2>
      </div>
      <div className="portfolio-list">
        {/* Cruise Ctrl */}
        <div className="project">
          <div className="image-container">
            <img 
              src={isDarkMode ? ccDarkImage : ccImage} 
              alt="Project Image" 
              id="ccImage" 
            />
            <div className="image-overlay">
              <a href="https://app.milanote.com/1QIBUv1t9GcCdY?p=Dizb0VxqOX8" className="project-link">View Documentation</a>
            </div>
          </div>
          <div className="project-details">
            <h3 className="project-title">Cruise Ctrl</h3>
            <p className="project-subtitle">iOS / Android Application</p>
            <p className="project-text">
              Cruise Ctrl is a cross-platform ride-sharing app for iOS built with Swift and SwiftUI, and Android via Kotlin, all seamlessly integrated with a Firebase back end. The app leverages an advanced ride-matching algorithm, significantly reducing wait times and enhancing ride capacity. In addition to efficiency gains, Cruise Ctrl prioritizes safety with innovative features ensuring both driver and passenger security during rides.                      
            </p>
            <a href="https://app.milanote.com/1QIBUv1t9GcCdY?p=Dizb0VxqOX8" className="project-button">View Documentation</a>
          </div>
        </div>

        {/* Path Pilot */}
        <div className="project">
          <div className="image-container">
            <img 
              src={isDarkMode ? ppDarkImage : ppImage}
              alt="Project Image"
            />
            <div className="image-overlay">
              <a href="https://docs.google.com/presentation/d/1x8h8MtTg71yWAEELGRANDa4BQQLx17N-hIY57qIPYWs/edit?usp=sharing" className="project-link">View Website</a>
            </div>
          </div>
          <div className="project-details">
            <h3 className="project-title">Path Pilot</h3>
            <p className="project-subtitle">iOS Application</p>
            <p className="project-text">
              Path Pilot is a iOS fitness app that leverages a proprietary algorithm to generate randomized routes of a specified distance, starting and ending at the user's location. The app also tracks advanced running metrics and allows you and your friends to compete, share routes and more! Crafted in Swift with Mapbox integration, the app utilizes Firebase for backend support, while continuous testing and deployment are managed through TestFlight and Xcode Cloud.
            </p>
            <a href="https://docs.google.com/presentation/d/1x8h8MtTg71yWAEELGRANDa4BQQLx17N-hIY57qIPYWs/edit?usp=sharing" className="project-button">View Website</a>
          </div>
        </div>

        {/* Flushed Funds */}
        <div className="project">
          <div className="image-container">
            <img src={ffImage} alt="Project Image" />
            <div className="image-overlay">
              <a href="https://github.com/webbhenry1/FlushedFunds-iOS" className="project-link">View Repository</a>
            </div>
          </div>
          <div className="project-details">
            <h3 className="project-title">Flushed Funds</h3>
            <p className="project-subtitle">iOS Application</p>
            <p className="project-text">
              Flushed Funds is an iOS app that is designed to manage and track financial transactions within competitive settings. While it seamlessly integrates with poker games to oversee player buy-ins or the accumulation of money in the pot, its versatile features also make it ideal for managing stakes in tournaments, like fantasy sports leagues or eSports competitions.
              It was made using Swift for the front end, and Firebase for the server side.
            </p>
            <a href="https://github.com/webbhenry1/FlushedFunds-iOS" className="project-button">View Repository</a>
          </div>
        </div>
            
        {/* Vieworthy */}
        <div className="project">
          <div className="image-container">
            <img src={vwImage} alt="Project Image" />
            <div className="image-overlay">
              <a href="https://www.vieworthy.com/" className="project-link">View Website</a>
            </div>
          </div>
          <div className="project-details">
            <h3 className="project-title">Vieworthy</h3>
            <p className="project-subtitle">Website & Chrome Extension</p>
            <p className="project-text">
              Vieworthy is an AI-enhanced platform, available as both a website and Chrome extension. We've implemented a proprietary algorithm to train the GPT-3.5 LLM, enabling precise video curation from YouTube. Built using Node.js, it integrates OpenAI's GPT-3.5 API and Google's YouTube Data API for optimal performance and content delivery.                    
            </p>
            <a href="https://www.vieworthy.com/" className="project-button">View Website</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio; 