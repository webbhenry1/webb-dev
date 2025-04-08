import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <section className="container contact" id="contact" style={{ minHeight: 'auto', height: 'auto', paddingBottom: '7rem' }}>
      <div className="contact-container" style={{ padding: 0, margin: 0, marginBottom: '3rem' }}>
        <div className="main-title">
          <h2>Contact <span>Me</span></h2> 
        </div>
        <div className="contact-content-con">
          <div className="left-contact">
            <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div className="contact-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <div className="icon" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <h7>
                    <span>Email</span>
                  </h7>
                </div>
                <p>
                  <span>01.henryw@gmail.com</span>
                </p>
              </div>
              
              <div className="contact-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <div className="icon" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FontAwesomeIcon icon={faPhone} />
                  <h7>
                    <span>Mobile Number</span>
                  </h7>
                </div>
                <p>
                  <span>+1(585)485-3087</span>
                </p>
              </div>

              <div className="contact-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <div className="icon" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <h7>
                    <span>Location</span>
                  </h7>
                </div>
                <p>
                  <span>Stamford, CT 06901</span>
                </p>
              </div>

              <div className="contact-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <div className="icon" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FontAwesomeIcon icon={faLinkedin} />
                  <h7>
                    <span>LinkedIn</span>
                  </h7>
                </div>
                <p>
                  <span><a href="https://www.linkedin.com/in/henry-webb-2b07b2223/" target="_blank" rel="noopener noreferrer">Henry Webb</a></span>
                </p>
              </div>

              <div className="contact-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <div className="icon" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FontAwesomeIcon icon={faGithub} />
                  <h7>
                    <span>GitHub</span>
                  </h7>
                </div>
                <p>
                  <span><a href="https://github.com/webbhenry1" target="_blank" rel="noopener noreferrer">webbhenry1</a></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 