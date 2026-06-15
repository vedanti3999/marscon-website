import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logo from "../../assets/logo.png";

const servicesMenu = [
  {
    group: 'Turnkey & Project Services',
    items: [
      { label: 'Turnkey Projects', path: '/services/turnkey-projects' },
      { label: 'Relocation of Assembly Lines', path: '/services/relocation' },
      { label: 'Consultancy & Project Planning', path: '/services/consultancy' },
      { label: 'Installation & Commissioning', path: '/services/installation-commissioning' },
    ],
  },
  {
    group: 'Automation & Controls',
    items: [
      { label: 'Industrial Automation Solutions', path: '/services/automation' },
      { label: 'Robotics & Manufacturing Automation', path: '/services/robotics' },
      { label: 'PLC / SCADA / HMI Development', path: '/services/plc-scada-hmi' },
      { label: 'Electrical Design & Panel Manufacturing', path: '/services/electrical-design' },
    ],
  },
  {
    group: 'Design & Product Engineering',
    items: [
      { label: 'Product Development', path: '/services/product-development' },
      { label: 'Product Design', path: '/services/product-design' },
      { label: 'Mechanical & Design Services', path: '/services/mechanical-design' },
      { label: 'CAD / 3D Modeling & Drawings', path: '/services/cad-3d-modeling' },
    ],
  },
  {
    group: 'Fabrication & Build',
    items: [
      { label: 'Fabrication (MS & SS)', path: '/services/fabrication' },
      { label: 'Custom Fixtures & Structures', path: '/services/fixtures-structures' },
      { label: 'Platforms, Racks & Special Fabrications', path: '/services/platforms-racks' },
    ],
  },
  {
    group: 'Digital Manufacturing',
    items: [
      { label: 'Manufacturing Execution System (MES)', path: '/services/mes' },
      { label: 'Machine Integration', path: '/services/machine-integration' },
      { label: 'Data & Process Monitoring', path: '/services/data-monitoring' },
    ],
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          <img
            src={logo}
            alt="Marscon Logo"
            className="logo-img"
          />
        </Link>

        <ul className="navbar-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>

          <li className="has-dropdown" ref={dropRef}>
            <button
              className="dropdown-trigger"
              onClick={() => setServicesOpen(p => !p)}
              aria-expanded={servicesOpen}
            >
              Services <FaChevronDown className={`chev ${servicesOpen ? 'chev--open' : ''}`} />
            </button>

            {servicesOpen && (
              <div className="mega-menu">
                {servicesMenu.map((grp, gi) => (
                  <div className="mega-group" key={gi}>
                    <div className="mega-group-title">{grp.group}</div>
                    {grp.items.map(s => (
                      <Link to={s.path} key={s.path} className="mega-item">
                        {s.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </li>

          <li><NavLink to="/industries">Industries</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/capabilities">Capabilities</NavLink></li>
          <li><NavLink to="/clients">Our Clients</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>

        <Link to="/contact" className="navbar-cta">Get in Touch</Link>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(p => !p)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`mobile-drawer ${mobileOpen ? 'mobile-drawer--open' : ''}`}>
        <ul className="mobile-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>

          <li>
            <button
              onClick={() => setServicesOpen(p => !p)}
              className="mobile-dropdown-btn"
            >
              Services <FaChevronDown className={`chev ${servicesOpen ? 'chev--open' : ''}`} />
            </button>

            {servicesOpen && (
              <div className="mobile-sub">
                {servicesMenu.map((grp, gi) => (
                  <div key={gi}>
                    <div className="mobile-group-title">{grp.group}</div>
                    {grp.items.map(s => (
                      <Link to={s.path} key={s.path}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </li>

          <li><NavLink to="/industries">Industries</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/capabilities">Capabilities</NavLink></li>
          <li><NavLink to="/clients">Our Clients</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
          <li><Link to="/contact" className="btn-primary mobile-cta">Get in Touch</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;