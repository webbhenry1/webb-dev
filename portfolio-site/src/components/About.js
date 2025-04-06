import React from 'react';

function About() {
  return (
    <section className="container about fullscreen-section" id="about">
      <div className="main-title">
        <h2>About <span>me</span></h2>
      </div>
      <div className="about-container" style={{ display: 'flex', width: '100%' }}>
        <div className="left-about" style={{ flex: '2', paddingRight: '2rem' }}>
          <h4>Get to Know me</h4>
          <p>
            I am a 23-year-old recent graduate of Rensselaer Polytechnic Institute, where I earned my B.S. in Computer Science with a minor in Business Management & Entrepreneurship. <br /> <br />
            
            Throughout my education and career, I've developed extensive experience with numerous programming languages and technologies, the most prominent including Python, C, C++, Java, JavaScript, React, React Native, Swift, SQL, HTML, and CSS. I've also gained deep knowledge in designing efficient algorithms and selecting optimal data structures for various situations. <br /> <br />
            
            College was a transformative wake-up call that taught me the true meaning of hard work and dedication. During my final year at RPI, I managed a full course load while working a hybrid software developer/business analyst position at a large biopharma company and simultaneously leading a development team for a startup. This demanding schedule required me to rethink my priorities and commit to 60-80 hour work weeks to achieve my goals. After graduation, I continued this pace, balancing my full-time position while pursuing multiple startup ventures and contracting roles. Through this intense period, I developed a genuine appreciation for "the grind" and now find fulfillment in my work despite the rigorous schedule of 6-7 day work weeks and 10+ hour days. This experience has shown me that when you're passionate about what you do, even the most demanding challenges become rewarding opportunities for growth.
          </p>
        </div>
        <div className="right-about" style={{ flex: '1' }}>
          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">10+</p>
              <p className="small-text">Fullstack Web & Mobile Apps <br /> Developed</p>
            </div>
          </div>
          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">15,000+</p>
              <p className="small-text">Users Across <br /> All Projects</p>
            </div>
          </div>
          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">25+</p>
              <p className="small-text">Programming Languages <br /> Used</p>
            </div>
          </div>
          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">7+</p>
              <p className="small-text">Years of <br /> Coding Education</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-stats">
        <h4 className="stat-title">My Top Languages</h4>
        <ol className="skills-list">
          <li>
            <span className="skill-title">Html</span>
            <span className="skill-experience">5 Years</span>
          </li>
          <li>
            <span className="skill-title">Python</span>
            <span className="skill-experience">5 Years</span>
          </li>
          <li>
            <span className="skill-title">Javascript</span>
            <span className="skill-experience">3 Years</span>
          </li>
          <li>
            <span className="skill-title">C++</span>
            <span className="skill-experience">3 Years</span>
          </li>
          <li>
            <span className="skill-title">C</span>
            <span className="skill-experience">3 Years</span>
          </li>
          <li>
            <span className="skill-title">Swift</span>
            <span className="skill-experience">2 Years</span>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default About; 