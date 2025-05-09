import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home-container">
    <div className="profile-card">
      <div className="profile-image-container">
        <img 
          src="profile.png" 
          alt="Profile" 
          className="profile-image"
        />
      </div>
      <div className="home-text">
        <h1>Welcomee..</h1>
        <p>I'm a web developer dedicated to building clean, efficient, 
          and scalable digital solutions. With experience in both frontend and backend technologies, 
          I enjoy turning complex problems into simple, elegant interfaces and robust systems.</p>
        <Link to="/contact" className="hire-button">Hire Me</Link>
      </div>
    </div>
  </div>
);

export default Home;