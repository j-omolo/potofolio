import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <motion.nav 
      className="navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="logo">My Portfolio</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </motion.nav>
  );
}
