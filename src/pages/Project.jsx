import { motion } from 'framer-motion';
import './Projects.css';

export default function Projects() {
  const projectList = [
    {
      title: 'Task Manager App',
      description: 'A full-stack MERN application for managing daily tasks with authentication and real-time updates.',
      link: '#'
    },
    {
      title: 'AI Chatbot for Banking',
      description: 'An AI-powered chatbot that provides banking and finance-related services to users.',
      link: '#'
    },
    {
      title: 'M-Kura Online Voting System',
      description: 'A secure online voting system built with the MERN stack for Kenyan elections.',
      link: '#'
    }
  ];

  return (
    <div className="projects-container">
      <motion.h1 
        className="projects-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>
      <div className="projects-list">
        {projectList.map((project, index) => (
          <motion.div 
            className="project-card"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} className="project-link">View Project</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
