import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <motion.h1 
        className="about-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>
      <motion.p 
        className="about-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I am a passionate Full-Stack MERN Developer with a strong background in building interactive web applications. 
        I specialize in React, Node.js, MongoDB, and Express, and I enjoy creating innovative and user-friendly digital experiences.
      </motion.p>
      <motion.div 
        className="skills-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <h2 className="skills-title">Skills & Technologies</h2>
        <ul className="skills-list">
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>JavaScript (ES6+)</li>
          <li>CSS3 & Tailwind</li>
          <li>RESTful APIs</li>
          <li>Git & GitHub</li>
        </ul>
      </motion.div>
    </div>
  );
}
