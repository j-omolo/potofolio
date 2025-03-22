import { motion } from 'framer-motion';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <motion.h1 
        className="home-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p 
        className="home-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I am a Full-Stack MERN Developer passionate about building amazing web applications.
      </motion.p>
      <motion.a 
        href="/projects" 
        className="home-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        View My Work
      </motion.a>
    </div>
  );
}
