import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaYoutube, FaArrowRight } from 'react-icons/fa';
import './Footer.css';
import logo from "../../assets/logo.png";

const Footer = () => (
  <footer className="footer">
    <div className="footer-main">
      <div className="container footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="Marscon Logo" className="footer-logo-img" />
          </Link>
          <p className="footer-desc">
            Marscon India LLP is an engineering-driven industrial solutions company specializing
            in turnkey projects, automation, fabrication, and assembly-line integration. We help
            manufacturers build smarter factories.
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com"  target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://linkedin.com"  target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://youtube.com"   target="_blank" rel="noreferrer"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links">
            {[
              {label:'Home',        path:'/'},
              {label:'About Us',    path:'/about'},
              {label:'Services',    path:'/services'},
              {label:'Industries',  path:'/industries'},
              {label:'Projects',    path:'/projects'},
              {label:'Capabilities',path:'/capabilities'},
              {label:'Our Clients', path:'/clients'},
              {label:'Contact Us',  path:'/contact'},
            ].map(l=>(
              <li key={l.path}><Link to={l.path}><FaArrowRight className="link-arrow"/>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4 className="footer-col-title">Our Services</h4>
          <ul className="footer-links">
            {[
              {label:'Turnkey Projects',           path:'/services/turnkey-projects'},
              {label:'Industrial Automation',      path:'/services/automation'},
              {label:'Robotics',                   path:'/services/robotics'},
              {label:'PLC / SCADA / HMI',          path:'/services/plc-scada-hmi'},
              {label:'CAD / 3D Modeling',          path:'/services/cad-3d-modeling'},
              {label:'Fabrication (MS & SS)',       path:'/services/fabrication'},
              {label:'MES Implementation',         path:'/services/mes'},
              {label:'Machine Integration',        path:'/services/machine-integration'},
            ].map(s=>(
              <li key={s.path}><Link to={s.path}><FaArrowRight className="link-arrow"/>{s.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4 className="footer-col-title">Contact Info</h4>
          <div className="footer-contact-items">
            <div className="footer-contact-item">
              <FaMapMarkerAlt />
              <span>Plot No, GP-89, Swami Plaza, MIDC Chinchwad, Pune – 411019, Maharashtra, India</span>
            </div>
            <div className="footer-contact-item">
              <FaPhone />
              <div>
                <a href="tel:+917744091318">(+91) 7744091318</a><br/>
                <a href="tel:02027493737">020 27493737</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <FaEnvelope />
              <a href="mailto:marscon.india@gmail.com">marscon.india@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container footer-bottom-inner">
        <p>© 2024 Marscon India LLP. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/contact">Privacy Policy</Link>
          <span>|</span>
          <Link to="/contact">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
