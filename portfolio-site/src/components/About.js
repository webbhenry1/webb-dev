import React from 'react';

function About() {
  return (
    <section className="container about fullscreen-section" id="about">
      <div className="main-title">
        <h2>About <span>me</span></h2>
      </div>
      <div className="about-container">
        <div className="left-about">
          <h4>Get to Know me</h4>
          <p>
            I am currently a senior at Rensselaer Polytechnic Institute, working towards a B.S. in Computer Science with a concentration in Artificial Intelligence. Additionally, I'm pursuing minors in Cognitive Science and Business Management & Entrepreneurship. <br /> <br />
            While studying at Rensselear Polytechnic Institute I have had extensive experience with multiple coding languages,
            the most prominent including Python, C, C++, Java, JavaScript, Swift, SQL, HTML, CSS and jQuery.
            I have also gained extensive knowledge on how to write extremely efficient algorithms and which data structures are best for each situation.
            My studies and extracurricular projects have made me very skilled at debugging, writing clean
            and efficient code, as well as picking up new languages very quickly and understanding code that I have never seen before.
          </p>
        </div>
        <div className="right-about">
          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">25+</p>
              <p className="small-text">Programming Languages <br /> Used</p>
            </div>
          </div>
          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">5+</p>
              <p className="small-text">Years of <br /> Coding Education</p>
            </div>
          </div>
          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">5+</p>
              <p className="small-text">Fullstack Mobile Apps <br /> Developed</p>
            </div>
          </div>
          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">2+</p>
              <p className="small-text">Years of Relevant <br /> Work Experience</p>
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