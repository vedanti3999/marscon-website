import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Capabilities.css';
import './Capabilities.css';

const capabilities = [
  {
    emoji: '🔨',
    title: 'Mechanical Workshop',
    desc: 'State-of-the-art mechanical workshop equipped with modern machinery for precision fabrication and assembly.',
    points: ['CNC Machines', 'Welding Equipment (MIG/TIG/Spot)', 'Precision Tools', 'Quality Control Lab'],
    img: 'https://images.unsplash.com/photo-1745448797900-35d08e85e9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFicmljYXRpb24lMjB3ZWxkaW5nfGVufDF8fHx8MTc2NzI0MDUwNnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    emoji: '🤖',
    title: 'Automation & Controls Lab',
    desc: 'Advanced testing and development facility for automation systems, PLC programming, and control panel assembly.',
    points: ['PLC Testing Setup', 'SCADA Development Station', 'Panel Assembly Station', 'System Integration Lab'],
    img: 'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9ib3RpY3MlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2NzI0NjIzNnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    emoji: '💡',
    title: 'Design & Simulation',
    desc: 'Comprehensive design capabilities using latest CAD/CAM software for 3D modeling, simulation, and analysis.',
    points: ['3D CAD Modeling (SolidWorks, CATIA)', 'FEA Analysis', 'Process Simulation', 'Technical Documentation'],
    img: 'https://images.unsplash.com/photo-1747999918007-e3442cabb23a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDQUQlMjBkZXNpZ24lMjBlbmdpbmVlcmluZ3xlbnwxfHx8fDE3NjcyNDYyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    emoji: '👷',
    title: 'On-Site Execution Team',
    desc: 'Experienced field engineers and technicians for installation, commissioning, and on-site project management.',
    points: ['Installation Services', 'Commissioning Support', 'Operator Training Programs', 'After-Sales Service'],
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  },
];

const Capabilities = () => (
  <div className="capabilities-page">

    <section className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80)' }} />
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        <h1>Our Capabilities</h1>
        <div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Capabilities</span></div>
        <p className="page-hero-sub">Advanced facilities and expertise that enable us to deliver comprehensive industrial engineering solutions with excellence.</p>
      </div>
    </section>

    <section className="section-pad">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 52 }}>
          <span className="section-tag">What We Have</span>
          <h2 className="section-title">Our Capabilities</h2>
          <p className="section-subtitle">Advanced facilities and expertise that enable us to deliver comprehensive industrial engineering solutions with excellence.</p>
        </div>
        <div className="cap-list">
          {capabilities.map((cap, i) => (
            <div className={`cap-item ${i % 2 !== 0 ? 'cap-item--reverse' : ''}`} key={i}>
              <div className="cap-img-wrap">
                <img src={cap.img} alt={cap.title} />
              </div>
              <div className="cap-content">
                <div className="cap-emoji">{cap.emoji}</div>
                <h2 className="cap-title">{cap.title}</h2>
                <p className="cap-desc">{cap.desc}</p>
                <ul className="cap-points">
                  {cap.points.map((p, j) => (
                    <li key={j}><span className="cap-bullet" />{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="cap-cta">
      <div className="container cap-cta-inner">
        <h2>Ready to Leverage Our Capabilities?</h2>
        <p>Contact our team to discuss how Marscon India can support your next project.</p>
        <Link to="/contact" className="btn-primary">Get In Touch <FaArrowRight /></Link>
      </div>
    </section>
  </div>
);

export default Capabilities;
