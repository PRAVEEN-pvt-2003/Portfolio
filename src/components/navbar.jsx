import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../assets/react.svg';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
const handleScroll = () => {
  const sections = ['#home', '#About', '#Skills', '#Projects', '#Contact'];
  for (const id of sections) {
    const section = document.querySelector(id);
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        setActiveLink(id);
        break;
      }
    }
  }
};

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // trigger once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="kumar" />
        <span className="nav-name">PRAVEEN</span>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <GiHamburgerMenu />
      </div>

      <div className={`nav-wrapper ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          {[
            { name: 'Home', href: '#home' },
            { name: 'About', href: '#About' },
            { name: 'Skills', href: '#Skills' },
            { name: 'Projects', href: '#Projects' },
            { name: 'Contact', href: '#Contact' },
          ].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeLink === link.href ? 'active' : ''}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
