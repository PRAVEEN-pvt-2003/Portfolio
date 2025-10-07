import profile from '../assets/portfolioProfile.png';
import {
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaTelegram,
  FaLinkedin,
  FaArrowDown
} from 'react-icons/fa';
import './header.css';

function Header() {
  return (
    <div className="intro" id="home">
      <div className="intro-container">
        <div className="intro-left">

          <h1 className="greeting">Hi There,</h1>
          <h1 className="praveen">
            I'm Praveen <span className="highlight">Kumar</span>
          </h1>
          <h3 className="desig">Aspirant Frontend Developer   </h3>

          <button className="about-button">
            <a href="#About">
              About Me{' '}
              <FaArrowDown
                style={{
                  background: '#fff',
                  borderRadius: '50%',
                  padding: '4px',
                  color: 'black',
                  verticalAlign: 'middle'
                }}
              />
            </a>
          </button>

          <div className="home-social-icons">
            <a href="https://instagram.com/" title="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/+916379033685" title="WhatsApp" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://github.com/PRAVEEN-pvt-2003" title="GitHub" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://t.me/Praveen_vrz" title="Telegram" target="_blank" rel="noopener noreferrer">
              <FaTelegram />
            </a>
            <a href="https://www.linkedin.com/in/praveen-kumar-s-4a1b7b368/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="intro-right">
          <img src={profile} alt="Profile" className="profile-pic" />
        </div>
      </div>
    </div>
  );
}

export default Header;
