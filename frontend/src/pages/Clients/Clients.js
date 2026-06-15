import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import './Clients.css';

const clients = [
  {
    name: 'Tata Motors',
    cat: 'Automotive',
    emoji: '🚗',
    desc: 'One of India\'s largest automotive manufacturers. Marscon India supported multiple assembly line projects across their manufacturing facilities.',
    services: ['Assembly Line Relocation', 'Automation', 'Commissioning'],
  },
  {
    name: 'Mahindra & Mahindra',
    cat: 'Automotive',
    emoji: '🚙',
    desc: 'A global automotive and farm equipment manufacturer. We delivered turnkey automation and fabrication solutions for their production lines.',
    services: ['Turnkey Projects', 'Fabrication', 'PLC/SCADA'],
  },
  {
    name: 'Bajaj Auto',
    cat: 'Automotive',
    emoji: '🏍️',
    desc: 'India\'s leading two-wheeler and three-wheeler manufacturer. Marscon India provided automation and assembly line support for their plants.',
    services: ['Automation', 'Assembly Line', 'Electrical Design'],
  },
  {
    name: 'Lyric Robot',
    cat: 'Robotics',
    emoji: '🤖',
    desc: 'A robotics technology company. We partnered with Lyric Robot to deliver robotic integration and automation solutions for manufacturing clients.',
    services: ['Robotics Integration', 'Automation', 'Commissioning'],
  },
  {
    name: 'thyssenkrupp',
    cat: 'Engineering',
    emoji: '🏗️',
    desc: 'A global industrial conglomerate. Marscon India executed fabrication and structural engineering projects for thyssenkrupp\'s Indian operations.',
    services: ['Fabrication', 'Structural Engineering', 'Installation'],
  },
  {
    name: 'GEDIA',
    cat: 'Automotive Components',
    emoji: '⚙️',
    desc: 'A global automotive component manufacturer. We delivered press shop solutions and custom fabrication for GEDIA\'s India facility.',
    services: ['Press Shop Setup', 'Custom Fabrication', 'Commissioning'],
  },
  {
    name: 'CMWTEC',
    cat: 'Technology',
    emoji: '💡',
    desc: 'Technology solutions company. Marscon India collaborated on automation and MES implementation projects for manufacturing clients.',
    services: ['MES Implementation', 'Machine Integration', 'Automation'],
  },
  {
    name: 'Automag',
    cat: 'Manufacturing',
    emoji: '🏭',
    desc: 'Manufacturing company for which Marscon India delivered complete turnkey project execution and automation solutions.',
    services: ['Turnkey Projects', 'Automation', 'Electrical Design'],
  },
  {
    name: 'C&I System Co. Ltd.',
    cat: 'Innovation',
    emoji: '🔬',
    desc: 'Control and instrumentation systems company. We supported C&I System with panel manufacturing and system integration projects.',
    services: ['Panel Manufacturing', 'System Integration', 'PLC/SCADA'],
  },
  {
    name: 'Nakanishi Metal Works',
    cat: 'Metal Works',
    emoji: '🔧',
    desc: 'Metal works manufacturer. Marscon India provided fabrication, jigs & fixtures, and assembly support for their production requirements.',
    services: ['Fabrication', 'Jigs & Fixtures', 'Assembly Support'],
  },
];

const testimonials = [
  {
    text: 'Marscon India LLP has been instrumental in upgrading our assembly line automation. Their technical expertise and commitment to quality have significantly improved our production efficiency. We recommend them as a trusted engineering partner.',
    name: 'Production Manager',
    role: 'Leading Automotive OEM',
    emoji: '🚗',
  },
  {
    text: 'Their material handling solutions transformed our warehouse operations. The team was professional, delivered on time, and provided excellent post-installation support. A truly reliable engineering partner.',
    name: 'Operations Director',
    role: 'Manufacturing & Logistics Firm',
    emoji: '📦',
  },
  {
    text: 'We engaged Marscon India for a critical factory relocation project. Their planning, execution, and commissioning was flawless — we restarted production ahead of schedule. Highly professional team.',
    name: 'Plant Head',
    role: 'Automotive Tier-1 Supplier',
    emoji: '🏭',
  },
];

const Clients = () => (
  <div className="clients-page">

    <section className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1400&q=80)' }} />
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        <h1>Our Clients</h1>
        <div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Our Clients</span></div>
        <p className="page-hero-sub">Trusted by leading manufacturing companies across India for delivering excellence in industrial engineering solutions.</p>
      </div>
    </section>

    {/* Intro */}
    <section className="section-pad">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 52 }}>
          <span className="section-tag">Who We Work With</span>
          <h2 className="section-title">Our Valued Clients</h2>
          <p className="section-subtitle">We are proud to partner with some of India's and the world's most respected manufacturing companies.</p>
        </div>

        <div className="clients-big-grid">
          {clients.map((c, i) => (
            <div className="client-big-card" key={i}>
              <div className="cbc-top">
                <div className="cbc-emoji">{c.emoji}</div>
                <div>
                  <h3 className="cbc-name">{c.name}</h3>
                  <span className="cbc-cat">{c.cat}</span>
                </div>
              </div>
              <p className="cbc-desc">{c.desc}</p>
              <div className="cbc-services">
                {c.services.map((s, j) => <span key={j} className="cbc-service-tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-pad client-testimonials">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 48 }}>
          <span className="section-tag">Client Feedback</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="ct-card" key={i}>
              <FaQuoteLeft className="ct-quote" />
              <p className="ct-text">"{t.text}"</p>
              <div className="ct-author">
                <div className="ct-avatar">{t.emoji}</div>
                <div>
                  <div className="ct-name">{t.name}</div>
                  <div className="ct-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="clients-cta">
      <div className="container clients-cta-inner">
        <h2>Join Our Growing List of Satisfied Clients</h2>
        <p>Partner with Marscon India for reliable, high-quality industrial engineering solutions.</p>
        <Link to="/contact" className="btn-primary">Get In Touch <FaArrowRight /></Link>
      </div>
    </section>
  </div>
);

export default Clients;
