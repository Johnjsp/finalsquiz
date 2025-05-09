import { useState } from 'react';


const Projects = () => {
  const [filter, setFilter] = useState('All Projects');
  
  const projects = [
    {
      id: 1,
      title: 'PORTFOLIO PROJECT',
      description: 'A frontend that shows about myself, skills, my projects and contacts .',
      category: 'Frontend',
      liveLink: 'https://johnn1.netlify.app',
      githubLink: 'https://github.com/Johnjsp/john2'
    },
    {
      id: 2,
      title: 'STATE MANAGEMENT LOADING SPINNER',
      description: 'A Backend Statement for account management with loading spinning.',
      category: 'Backend',
      liveLink: 'https://israel1.netlify.app/',
      githubLink: 'https://github.com/Johnjsp/finalredux'
    },
    {
      id: 3,
      title: 'ADVANCED API USAGE WITH SEARCH BAR',
      description: 'A frontend that shows the advanced of API usage for searching books .',
      category: 'Frontend',
      liveLink: 'https://solidbyisrael.netlify.app',
      githubLink: 'https://github.com/Johnjsp/fetch'
    },
    {
      id: 4,
      title: 'RESPONSIVE NAVBAR & CARDS',
      description: 'A frontend that shows responsive of navbar and cards.',
      category: 'Frontend',
      liveLink: 'https://johnjsp.github.io/johnjosephassignment2',
      githubLink: 'https://github.com/Johnjsp/johnjosephassignment2.git'
    }
  ];

  const filteredProjects = filter === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects-page">
      
      <div className="filter-buttons">
        <button 
          className={filter === 'All Projects' ? 'active' : ''} 
          onClick={() => setFilter('All Projects')}
        >
          All Projects
        </button>
        <button 
          className={filter === 'Frontend' ? 'active' : ''} 
          onClick={() => setFilter('Frontend')}
        >
          Frontend
        </button>
        <button 
          className={filter === 'Backend' ? 'active' : ''} 
          onClick={() => setFilter('Backend')}
        >
          Backend
        </button>
        <button 
          className={filter === 'Full Stack' ? 'active' : ''} 
          onClick={() => setFilter('Full Stack')}
        >
          Full Stack
        </button>
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div 
            key={project.id} 
            className={`project-card ${project.id % 2 === 0 ? 'highlight' : ''}`}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">Live</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;