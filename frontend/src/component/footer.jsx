import React from 'react';
import './Footer.css';  // Link to your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>DietMe</h2>
          <span>Careers</span>
          <span>Consumer Care</span>
          <span>Alumni</span>
          {/* <div className="social-media">
            <a href="www.facebook.com"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div> */}
        </div>
        <div className="footer-right">
          <h3>Get the freshest DietMe news</h3>
          <form className='form'> 
            <input type="email" placeholder="Your email here" />
            <button type="submit">Subscribe</button>
            <label>
              <input type="checkbox" /> By checking this box, you agree that you are at least 16 years of age.
            </label>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <ul>
          <li><a href="#terms">Website Terms</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#accessibility">Accessibility Statement</a></li>
          <li><a href="#supply-chain">CA Transparency in Supply Chains Act</a></li>
          <li><a href="#code-of-conduct">Supplier Code of Conduct</a></li>
          <li><a href="#marketing">Marketing to Children</a></li>
          <li><a href="#do-not-sell">Do Not Sell My Information</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
