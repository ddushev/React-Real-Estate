import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">Daniel Dushev Copyright &copy; 2023</p>
            <section className="footer-socials">
                <Link className="footer__linedin" to="https://www.linkedin.com/in/ddushev/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link className="footer__github" to="https://github.com/ddushev" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </Link>
            </section>
        </footer>
    );
}