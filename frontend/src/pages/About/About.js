import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import './About.css';

const values = [
  { title: 'Customer First',  desc: 'We build lasting partnerships by putting client success at the center of everything we do.' },
  { title: 'Innovation',      desc: 'We adopt the latest technology and a continuous improvement mindset in every project we take up.' },
  { title: 'Quality',         desc: 'We deliver excellence in every installation, commissioning, and fabrication task.' },
  { title: 'Integrity',       desc: 'We do the right thing — always transparent, always accountable to our clients.' },
];

const capabilities = [
  'Turnkey Projects',
  'Assembly Line Relocation',
  'Industrial Automation',
  'PLC / SCADA / HMI Development',
  'Robotics Integration',
  'Electrical Design & Panel Manufacturing',
  'Product Development & Design',
  'CAD / 3D Modeling',
  'Fabrication (MS & SS)',
  'Custom Fixtures & Structures',
  'MES Implementation',
  'Machine Integration & Data Monitoring',
];

const About = () => (
  <div className="about-page">

    <section className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=80)' }} />
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        <h1>About Us</h1>
        <div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>About Us</span></div>
      </div>
    </section>

    {/* Overview */}
    <section className="section-pad">
      <div className="container about-overview">
        <div className="about-overview-img">
          <img src="https://shreyamorti28.github.io/Marscon/about%20us.png" alt="Marscon India" />
          <div className="about-badge">
            <span className="badge-num">50+</span>
            <span className="badge-label">Projects Completed</span>
          </div>
        </div>
        <div className="about-overview-text">
          <span className="section-tag">About Marscon India LLP</span>
          <h2 className="section-title">Engineering-Driven Industrial Solutions</h2>
          <p>Marscon India is an engineering-driven industrial solutions company specializing in turnkey projects, automation, fabrication, and assembly-line integration. We work closely with manufacturing organizations to design, build, upgrade, and optimize production systems that improve efficiency, safety, and reliability.</p>
          <p style={{marginTop:14}}>Our capabilities span product development, mechanical and electrical design, PLC-SCADA-HMI development, MES implementation, panel manufacturing, and custom MS/SS fabrication. With hands-on execution teams and strong technical expertise, we deliver complete solutions — from concept and engineering to installation, commissioning, and long-term support.</p>
          <p style={{marginTop:14}}>Whether it's relocating an assembly line, automating a repetitive process, developing a new product, or building a digital factory ecosystem, Marscon India provides practical, cost-effective engineering that helps industries perform better and grow sustainably.</p>
          <div className="about-stats-row">
            <div className="about-stat"><span className="about-stat-num">50+</span><span className="about-stat-label">Projects Completed</span></div>
            <div className="about-stat"><span className="about-stat-num">30+</span><span className="about-stat-label">Happy Clients</span></div>
            <div className="about-stat"><span className="about-stat-num">5+</span><span className="about-stat-label">Years Experience</span></div>
          </div>
          <Link to="/contact" className="btn-primary" style={{marginTop:28}}>Get In Touch <FaArrowRight /></Link>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-pad values-section">
      <div className="container">
        <div className="text-center" style={{marginBottom:48}}>
          <span className="section-tag">Our Core Principles</span>
          <h2 className="section-title">What We Stand For</h2>
        </div>
        <div className="values-grid">
          {values.map((v,i) => (
            <div className="value-card" key={i}>
              <div className="value-num">0{i+1}</div>
              <h3 className="value-title">{v.title}</h3>
              <p className="value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Capabilities */}
    <section className="section-pad capab-section">
      <div className="container capab-inner">
        <div className="capab-text">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Our Core Capabilities</h2>
          <p>From concept engineering to on-site commissioning, Marscon India delivers end-to-end industrial solutions that help manufacturers stay ahead.</p>
          <ul className="capab-list">
            {capabilities.map((c,i) => (
              <li key={i}><FaCheck className="capab-check" /><span>{c}</span></li>
            ))}
          </ul>
          <Link to="/capabilities" className="btn-primary" style={{marginTop:28}}>Full Capabilities <FaArrowRight /></Link>
        </div>
        <div className="capab-img">
          <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80" alt="Marscon Capabilities" />
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="about-cta">
      <div className="container about-cta-inner">
        <h2>Ready to Transform Your Manufacturing Operations?</h2>
        <p>Partner with Marscon India for end-to-end industrial solutions.</p>
        <div className="about-cta-btns">
          <Link to="/contact"  className="btn-primary">Get In Touch <FaArrowRight /></Link>
          <Link to="/services" className="btn-secondary">Our Services <FaArrowRight /></Link>
        </div>
      </div>
    </section>
  </div>
);

export default About;
