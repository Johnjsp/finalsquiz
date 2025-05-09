


const About = () => {
  // For skill animation and filtering
 
  

  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Me</h1>
        <div className="about-intro">
          <div className="about-image">
            {/* Replace with your actual image */}
            <img src="/profile.png" alt="John Joseph Israel" className="profile-photo" />
          </div>
          <div className="about-text-intro">
            <h2>John Joseph Israel</h2>
            <h3>Frontend Developer</h3>
            <p className="about-tagline">Crafting intuitive and performant web experiences</p>
            <div className="about-social">
              <a href="https://github.com/Johnjsp" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="mailto:johnjosephisrael99@gmail.com" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-bio">
        <div className="section-title">
          <h2>Professional Bio</h2>
          <div className="title-underline"></div>
        </div>
        <div className="bio-content">
          <p>
            I'm a passionate front-end developer focused on crafting high-quality, user-centric web applications using modern technologies. 
            My core stack includes React, JavaScript, and CSS/SCSS, which I use to build fast, accessible, and maintainable interfaces.
          </p>
          <p>
            I thrive on turning complex problems into simple, elegant solutions. My goal is to build inclusive web experiences that not only look great 
            but feel intuitive to use—ensuring performance, scalability, and accessibility in every project I take on.
          </p>
          <p>
            When I'm not coding, I enjoy expanding my knowledge through online courses, contributing to open source projects, and staying current with the latest web development trends and best practices.
          </p>
        </div>
      
      
      </section>
      
      <section className="about-education">
        <div className="section-title">
          <h2>Education</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="education-card">
          <div className="education-details">
            <h3>Bachelor of Science in Information Technology</h3>
            <h4>Dalubhasaan ng Lungsod ng Lucena</h4>
            <span className="education-period">2023 - 2025</span>
          </div>
          <p>Focused on web development, database management, and software engineering principles.</p>
        </div>
      </section>
    </div>
  );
};

export default About;