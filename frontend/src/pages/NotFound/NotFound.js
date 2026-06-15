import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaHome } from 'react-icons/fa';
import './NotFound.css';

const NotFound = () => (
  <div className="notfound-page">
    <div className="notfound-content">
      <div className="notfound-num">404</div>
      <h1 className="notfound-title">Page Not Found</h1>
      <p className="notfound-desc">The page you are looking for doesn't exist or has been moved. Let's get you back on track.</p>
      <div className="notfound-btns">
        <Link to="/"        className="btn-primary"><FaHome /> Go to Home</Link>
        <Link to="/contact" className="btn-outline-orange">Contact Us <FaArrowRight /></Link>
      </div>
    </div>
  </div>
);

export default NotFound;
