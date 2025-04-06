import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="container header active" id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img src={require("../assets/img/new.PNG")} alt="Henry Webb" />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            Hi, I'm <span>Henry Webb</span>
          </h1>
          <div className="title-container">
            <h2 className="roles">
              Software Engineer • Product Manager • BA
            </h2>
          </div>
          <p>
            From architecting enterprise solutions at industry giants to driving innovation at dynamic startups, I've cultivated a unique blend of technical expertise and strategic leadership. My journey spans full-stack development, product management, and business analysis, allowing me to bridge the gap between technical execution and business strategy. This multifaceted experience, combined with my relentless drive for excellence, enables me to not just build solutions, but to shape the future of technology initiatives from conception to delivery.
          </p>    
          <a href={require("../assets/img/Resume.pdf")} className="main-btn">
            <span className="btn-text">View My Resume</span>
            <span className="btn-icon"><FontAwesomeIcon icon={faNewspaper} /></span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header; 