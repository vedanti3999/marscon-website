import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';
import './TopBar.css';

const TopBar = () => (
  <div className="topbar">
    <div className="container topbar-inner">
      <div className="topbar-left">
        <a href="tel:+917744091318" className="topbar-item">
          <FaPhone /><span>(+91) 7744091318</span>
        </a>
        <a href="tel:02027493737" className="topbar-item">
          <FaPhone /><span>020 27493737</span>
        </a>
        <a href="mailto:marscon.india@gmail.com" className="topbar-item">
          <FaEnvelope /><span>marscon.india@gmail.com</span>
        </a>
      </div>
      <div className="topbar-right">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="topbar-social"><FaLinkedin /></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="topbar-social"><FaFacebook /></a>
        <a href="https://youtube.com"  target="_blank" rel="noreferrer" className="topbar-social"><FaYoutube /></a>
      </div>
    </div>
  </div>
);

export default TopBar;
