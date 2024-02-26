import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              Party Planner is your one-stop shop for creating unforgettable
              celebrations. We offer a wide range of services to make your event Memorable.
            </p>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>
              <a href="tel:+1234567890">Phone: (123) 456-7890</a><br />
              <a href="mailto:info@partyplanner.com">Email: info@partyplanner.com</a>
            </p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-media">
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Party Planner. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
