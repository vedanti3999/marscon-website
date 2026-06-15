import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import './Industries.css';

const industries = [
  {
    emoji: '🚗',
    title: 'Automotive Manufacturing',
    img: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=700&q=80',
    desc: 'Complete automation and assembly line solutions for automotive plants, including welding, painting, and final assembly operations. We are the preferred partner for global automotive brands operating in India.',
    points: [
      'Assembly Line Relocation & Commissioning',
      'Body Shop, Engine Shop & Trim Assembly',
      'Robotic Welding & Painting Systems',
      'PLC / SCADA / HMI Integration',
      'Material Handling & Conveying Systems',
      'Annual Maintenance Contracts',
    ],
    clients: ['Tata Motors', 'Mahindra & Mahindra', 'Bajaj Auto'],
  },
  {
    emoji: '🏗️',
    title: 'Engineering & Heavy Industry',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80',
    desc: 'Specialized material handling and fabrication services for heavy equipment manufacturers and industrial machinery production. Our structural steel and heavy fabrication capabilities serve India\'s engineering sector.',
    points: [
      'Heavy Equipment Installation',
      'Structural Steel Fabrication',
      'Machine Erection & Alignment',
      'Custom Fixtures & Tooling',
      'Plant Maintenance & Shutdown Services',
      'Factory Relocation',
    ],
    clients: ['thyssenkrupp', 'GEDIA'],
  },
  {
    emoji: '📦',
    title: 'Warehousing & Logistics',
    img: 'https://images.unsplash.com/photo-1721937718756-3bfec49f42a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBtYXRlcmlhbCUyMGhhbmRsaW5nfGVufDF8fHx8MTc2NzI0MDUwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    desc: 'Comprehensive conveyor systems, storage solutions, and material tracking for distribution centers and warehouses. We help logistics operators improve throughput, accuracy, and operational efficiency.',
    points: [
      'Conveyor System Design & Installation',
      'Storage Rack Systems (MS/SS)',
      'Mezzanine Platforms & Walkways',
      'Material Tracking (MES / SCADA)',
      'Automated Sorting Systems',
      'Turnkey Warehouse Setup',
    ],
    clients: [],
  },
  {
    emoji: '🏪',
    title: 'FMCG & Packaging',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    desc: 'Hygienic material handling systems and packaging automation for fast-moving consumer goods industries. We deliver SS fabrication, automated lines, and MES solutions that meet food-grade and GMP standards.',
    points: [
      'SS Fabrication (Food Grade)',
      'Packaging Line Automation',
      'Conveyor & Transfer Systems',
      'Quality Inspection Automation',
      'Washdown-Rated Electrical Panels',
      'MES for Production Tracking',
    ],
    clients: [],
  },
  {
    emoji: '⚡',
    title: 'General Manufacturing',
    img: 'https://images.unsplash.com/photo-1745448797900-35d08e85e9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFicmljYXRpb24lMjB3ZWxkaW5nfGVufDF8fHx8MTc2NzI0MDUwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    desc: 'Versatile automation and fabrication solutions for diverse manufacturing operations and production facilities. Marscon India supports general manufacturers with end-to-end engineering services.',
    points: [
      'Process Automation',
      'Custom Fabrication (MS & SS)',
      'Electrical Design & Panel Manufacturing',
      'CAD / 3D Modeling',
      'Product Development & Design',
      'Turnkey Project Execution',
    ],
    clients: ['CMWTEC', 'Automag', 'C&I System Co. Ltd.', 'Nakanishi Metal Works'],
  },
];

const Industries = () => (
  <div className="industries-page">

    <section className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?w=1400&q=80)' }} />
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        <h1>Industries We Serve</h1>
        <div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Industries</span></div>
        <p className="page-hero-sub">We serve diverse industries with tailored engineering solutions that address specific operational challenges.</p>
      </div>
    </section>

    <section className="section-pad">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 52 }}>
          <span className="section-tag">Our Sectors</span>
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">From automotive giants to FMCG manufacturers, Marscon India delivers industry-specific engineering solutions.</p>
        </div>
        <div className="ind-list">
          {industries.map((ind, i) => (
            <div className={`ind-item ${i % 2 !== 0 ? 'ind-item--reverse' : ''}`} key={i}>
              <div className="ind-img-wrap">
                <img src={ind.img} alt={ind.title} />
                <div className="ind-img-num">0{i + 1}</div>
              </div>
              <div className="ind-content">
                <div className="ind-emoji-title">
                  <span className="ind-big-emoji">{ind.emoji}</span>
                  <h2 className="ind-title">{ind.title}</h2>
                </div>
                <p className="ind-desc">{ind.desc}</p>
                <ul className="ind-points">
                  {ind.points.map((p, j) => (
                    <li key={j}><FaCheck className="ind-check" /><span>{p}</span></li>
                  ))}
                </ul>
                {ind.clients.length > 0 && (
                  <div className="ind-clients">
                    <span className="ind-clients-label">Key Clients:</span>
                    {ind.clients.map(c => <span key={c} className="ind-client-tag">{c}</span>)}
                  </div>
                )}
                <Link to="/contact" className="btn-primary" style={{ marginTop: 24 }}>
                  Get a Quote <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="ind-cta">
      <div className="container ind-cta-inner">
        <h2>Your Industry Not Listed? We Can Still Help.</h2>
        <p>Marscon India serves many more sectors. Contact us to discuss your specific requirements.</p>
        <Link to="/contact" className="btn-primary">Contact Us <FaArrowRight /></Link>
      </div>
    </section>
  </div>
);

export default Industries;
