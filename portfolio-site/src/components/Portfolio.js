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
  const hbImage = require("../assets/img/HB.png");
  const pulseImage = require("../assets/img/Pulse.png");
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
        {/* Hirebird */}
        <div className="project">
          <div className="image-container">
            <img 
              src={hbImage} 
              alt="Hirebird Project" 
              id="hbImage" 
            />
            <div className="image-overlay">
              <a href="https://joinhirebird.com" className="project-link" target="_blank" rel="noopener noreferrer">Visit Website</a>
            </div>
          </div>
          <div className="project-details">
            <h3 className="project-title">Hirebird</h3>
            <p className="project-subtitle">Web & Mobile based AI Platform (Acquired)</p>
            <p className="project-text">
              Spearheaded the development of an innovative AI-powered job search platform as both Product Manager and Software Engineer. Led a team of 5 developers while personally architecting the mobile application's UI/UX and implementing advanced AI features. The platform revolutionized job searching through a Tinder-inspired swiping interface and an intelligent job-matching system. Developed a sophisticated AI job coach using cutting-edge technologies including embeddings and Retrieval Augmented Generation (RAG), which provided personalized career guidance and application optimization. Successfully scaled the platform to support 7,500+ active users across 15,000 weekly sessions at its peak, achieving significant user engagement that ultimately led to the platform's acquisition. 
            </p>
            <a href="https://joinhirebird.com" className="project-button" target="_blank" rel="noopener noreferrer">Visit Website</a>
          </div>
        </div>

        {/* Pulse */}
        <div className="project">
          <div className="image-container">
            <img 
              src={pulseImage} 
              alt="Pulse Project" 
              id="pulseImage" 
            />
            <div className="image-overlay">
              <a href="https://www.dontflatline.com" className="project-link" target="_blank" rel="noopener noreferrer">Visit Website</a>
            </div>
          </div>
          <div className="project-details">
            <h3 className="project-title">Pulse</h3>
            <p className="project-subtitle">Sales Platform & CRM System</p>
            <p className="project-text">
              Developed a comprehensive sales platform designed specifically for door-to-door sales teams in solar, pest control, and fiber industries. The platform features a robust CRM system that streamlines the entire sales pipeline, from lead generation to project completion. Built innovative tools for territory mapping, appointment scheduling, and team collaboration, while implementing real-time leaderboards for performance tracking. Integrated an AI Sales Assistant that enhances customer engagement through company websites. The platform successfully optimizes sales operations by providing a unified solution for managing customer relationships, scheduling, proposal generation, and pipeline management, significantly improving efficiency for door-to-door sales professionals.
            </p>
            <a href="https://www.dontflatline.com" className="project-button" target="_blank" rel="noopener noreferrer">Visit Website</a>
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
              <a href="https://docs.google.com/presentation/d/1x8h8MtTg71yWAEELGRANDa4BQQLx17N-hIY57qIPYWs/edit?usp=sharing" className="project-link" target="_blank" rel="noopener noreferrer">View Website</a>
            </div>
          </div>
          <div className="project-details">
            <h3 className="project-title">Path Pilot</h3>
            <p className="project-subtitle">iOS Application</p>
            <p className="project-text">
              Path Pilot is a iOS fitness app that leverages a proprietary algorithm to generate randomized routes of a specified distance, starting and ending at the user's location. The app also tracks advanced running metrics and allows you and your friends to compete, share routes and more! Crafted in Swift with Mapbox integration, the app utilizes Firebase for backend support, while continuous testing and deployment are managed through TestFlight and Xcode Cloud.
            </p>
            <a href="https://docs.google.com/presentation/d/1x8h8MtTg71yWAEELGRANDa4BQQLx17N-hIY57qIPYWs/edit?usp=sharing" className="project-button" target="_blank" rel="noopener noreferrer">View Website</a>
          </div>
        </div>

        {/* Flushed Funds */}
        <div className="project">
          <div className="image-container">
            <img src={ffImage} alt="Project Image" />
            <div className="image-overlay">
              <a href="https://github.com/webbhenry1/FlushedFunds-iOS" className="project-link" target="_blank" rel="noopener noreferrer">View Repository</a>
            </div>
          </div>
          <div className="project-details">
            <h3 className="project-title">Flushed Funds</h3>
            <p className="project-subtitle">iOS Application</p>
            <p className="project-text">
              Flushed Funds is an iOS app that is designed to manage and track financial transactions within competitive settings. While it seamlessly integrates with poker games to oversee player buy-ins or the accumulation of money in the pot, its versatile features also make it ideal for managing stakes in tournaments, like fantasy sports leagues or eSports competitions.
              It was made using Swift for the front end, and Firebase for the server side.
            </p>
            <a href="https://github.com/webbhenry1/FlushedFunds-iOS" className="project-button" target="_blank" rel="noopener noreferrer">View Repository</a>
          </div>
        </div>
            
        {/* Vieworthy */}
        <div className="project">
          <div className="image-container">
            <img src={vwImage} alt="Project Image" />
            <div className="image-overlay">
              <a href="https://www.vieworthy.com/" className="project-link" target="_blank" rel="noopener noreferrer">View Website</a>
            </div>
          </div>
          <div className="project-details">
            <h3 className="project-title">Vieworthy</h3>
            <p className="project-subtitle">Website & Chrome Extension</p>
            <p className="project-text">
              Vieworthy is an AI-enhanced platform, available as both a website and Chrome extension. We've implemented a proprietary algorithm to train the GPT-3.5 LLM, enabling precise video curation from YouTube. Built using Node.js, it integrates OpenAI's GPT-3.5 API and Google's YouTube Data API for optimal performance and content delivery.                    
            </p>
            <a href="https://www.vieworthy.com/" className="project-button" target="_blank" rel="noopener noreferrer">View Website</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio; 