import './Footer.css';

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} MERN Portfolio. All rights reserved.</p>
                
                {/* Social Media Links */}
                <div className="social-links">
                    <a href="https://github.com/j-omolo" target="_blank" rel="noopener noreferrer" className="social-link">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                        LinkedIn
                    </a>
                    <a href="opatajacton2020@gmail.com" className="social-link">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
