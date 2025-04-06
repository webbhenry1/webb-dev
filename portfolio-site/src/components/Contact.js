import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <section className="container contact fullscreen-section" id="contact">
      <div className="contact-container">
        <div className="main-title">
          <h2>Contact <span>Me</span></h2> 
        </div>
        <div className="contact-content-con">
          <div className="left-contact">
            <div className="contact-info">
              <br />
              <div className="contact-item">
                <div className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <h7>
                    <span>Email</span>
                  </h7>
                </div>
                <p>
                  <span>01.henryw@gmail.com</span>
                </p>
              </div>
              
              <div className="contact-item">
                <div className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                  <h7>
                    <span>Mobile Number</span>
                  </h7>
                </div>
                <p>
                  <span>+1(585)485-3087</span>
                </p>
              </div>

              <div className="contact-item">
                <div className="icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <h7>
                    <span>Location</span>
                  </h7>
                </div>
                <p>
                  <span>Troy, New York 12180</span>
                </p>
              </div>

              <div className="contact-item">
                <div className="icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                  <h7>
                    <span>LinkedIn</span>
                  </h7>
                </div>
                <p>
                  <span><a href="https://www.linkedin.com/in/henry-webb-2b07b2223/">Henry Webb</a></span>
                </p>
              </div>

              <div className="contact-item">
                <div className="icon">
                  <FontAwesomeIcon icon={faGithub} />
                  <h7>
                    <span>GitHub</span>
                  </h7>
                </div>
                <p>
                  <span><a href="https://github.com/webbhenry1">webbhenry1</a></span>
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