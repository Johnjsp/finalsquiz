import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  return (
    <footer className="footer">
      <div className="footer-waves">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="wave-fill"></path>
        </svg>
      </div>
      
      <div className="footer-content">
        <div className="footer-section brand">
          <h3 className="footer-brand">JJI</h3>
          <p className="footer-tagline">Building amazing web experiences</p>
        </div>
        
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </nav>
        </div>
        
        <div className="footer-section contact">
  
          
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright">© {currentYear} John Joseph Israel | All Rights Reserved</p>
        <button className="scroll-to-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;