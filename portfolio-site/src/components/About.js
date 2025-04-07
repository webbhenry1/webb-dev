import React from 'react';

function About() {
  return (
    <section className="container about fullscreen-section" id="about">
      <div className="main-title">
        <h2>About <span>me</span></h2>
      </div>
      <div className="about-container" style={{ display: 'flex', width: '100%', gap: '2rem' }}>
        <div className="left-about" style={{ flex: '3', paddingRight: '0', marginLeft: '-4rem' }}>
          <h4 style={{ fontSize: '2.4rem', marginBottom: '1.8rem', color: 'var(--color-secondary)' }}>Get to Know me</h4>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.8', padding: '1rem', paddingLeft: '0', marginBottom: '-0.5rem' }}>
            I am a 23-year-old recent graduate of Rensselaer Polytechnic Institute, where I earned my B.S. in Computer Science with a minor in Business Management & Entrepreneurship. Throughout my education and career, I've developed extensive experience with numerous programming languages and technologies, the most prominent including Python, C, C++, Java, JavaScript, React, React Native, Swift, SQL, HTML, and CSS. I've also gained deep knowledge in designing efficient algorithms and selecting optimal data structures for various situations. <br /> <br />
            
            College was a transformative wake-up call that taught me the true meaning of hard work and dedication. During my final year at RPI, I managed a full course load while working a hybrid software engineer position at a large biopharmasutical company and simultaneously leading a development team as a product manager for a startup. This demanding schedule required me to rethink my priorities and commit to 60-80 hour work weeks to achieve my goals. After graduation, I continued this pace, balancing my full-time position while pursuing multiple startup ventures and contracting roles. Through this intense period, I developed a genuine appreciation for "the grind" and now find fulfillment in my work despite the rigorous schedule of 6-7 day work weeks and 10+ hour days. This experience has shown me that when you're passionate about what you do, even the most demanding challenges become rewarding opportunities for growth.
          </p>
        </div>
        <div className="right-about" style={{ flex: '2' }}>
          <div className="about-item" style={{ padding: '3rem 1rem 0.75rem 1rem' }}>
            <div className="abt-text">
              <p className="large-text" style={{ fontSize: '3.5rem', lineHeight: '0.9' }}>10+</p>
              <p className="small-text" style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>Fullstack Web & Mobile Apps <br /> Developed</p>
            </div>
          </div>
          <div className="about-item" style={{ padding: '3rem 1rem 0.75rem 1rem' }}>
            <div className="abt-text">
              <p className="large-text" style={{ fontSize: '3.5rem', lineHeight: '0.9' }}>15,000+</p>
              <p className="small-text" style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>Users Across <br /> All Projects</p>
            </div>
          </div>
          <div className="about-item" style={{ padding: '3rem 1rem 0.75rem 1rem' }}>
            <div className="abt-text">
              <p className="large-text" style={{ fontSize: '3.5rem', lineHeight: '0.9' }}>20+</p>
              <p className="small-text" style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>Programming Languages <br /> Used</p>
            </div>
          </div>
          <div className="about-item" style={{ padding: '3rem 1rem 0.75rem 1rem' }}>
            <div className="abt-text">
              <p className="large-text" style={{ fontSize: '3.5rem', lineHeight: '0.9' }}>7+</p>
              <p className="small-text" style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>Years of <br /> Coding Education</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 