import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <motion.h1 
        className="contact-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h1>
      <motion.form 
        className="contact-form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <input type="text" placeholder="Your Name" className="contact-input" required />
        <input type="email" placeholder="Your Email" className="contact-input" required />
        <textarea placeholder="Your Message" className="contact-textarea" required></textarea>
        <motion.button 
          className="contact-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
}