import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { FaArrowRight, FaCheck, FaPhone, FaEnvelope } from 'react-icons/fa';
import { ALL_SERVICES } from './Services';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service   = ALL_SERVICES.find(s => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;

  const others = ALL_SERVICES.filter(s => s.slug !== slug).slice(0, 5);

  return (
    <div className="sd-page">

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${service.img})` }} />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1>{service.title}</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span>
            <Link to="/services">Services</Link><span>/</span>
            <span>{service.title}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad">
        <div className="container sd-layout">

          {/* Main content */}
          <div className="sd-main">
            <img src={service.img} alt={service.title} className="sd-hero-img" />
            <div className="sd-icon-row">
              <div className="sd-emoji">{service.emoji}</div>
              <div>
                <span className="section-tag">{service.group}</span>
                <h2 className="sd-title">{service.title}</h2>
              </div>
            </div>
            <p className="sd-desc">{service.desc}</p>
            <h3 className="sd-sub-heading">Key Capabilities</h3>
            <div className="sd-points-grid">
              {service.points.map((p, i) => (
                <div className="sd-point" key={i}>
                  <FaCheck className="sd-check" /><span>{p}</span>
                </div>
              ))}
            </div>
            <div className="sd-cta">
              <Link to="/contact" className="btn-primary">Enquire Now <FaArrowRight /></Link>
              <Link to="/projects" className="btn-outline-orange">View Related Projects <FaArrowRight /></Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="sd-sidebar">
            <div className="sd-sidebar-box">
              <h4 className="sd-sidebar-title">All Services</h4>
              <ul className="sd-service-list">
                {ALL_SERVICES.map(s => (
                  <li key={s.slug} className={s.slug === slug ? 'active' : ''}>
                    <Link to={`/services/${s.slug}`}>
                      <span className="sd-sl-emoji">{s.emoji}</span>
                      {s.title}
                      <FaArrowRight className="sd-sl-arrow" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sd-contact-box">
              <h4>Need Help?</h4>
              <p>Talk to our engineers and get the right solution for your plant.</p>
              <a href="tel:+917744091318" className="sd-contact-link"><FaPhone />(+91) 7744091318</a>
              <a href="tel:02027493737"   className="sd-contact-link"><FaPhone />020 27493737</a>
              <a href="mailto:marscon.india@gmail.com" className="sd-contact-link"><FaEnvelope />marscon.india@gmail.com</a>
              <Link to="/contact" className="btn-primary" style={{ width:'100%', justifyContent:'center', marginTop:16 }}>
                Get a Quote <FaArrowRight />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Related services */}
      <section className="section-pad related-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 40 }}>
            <span className="section-tag">Explore More</span>
            <h2 className="section-title">Other Services</h2>
          </div>
          <div className="related-grid">
            {others.map((s, i) => (
              <Link to={`/services/${s.slug}`} className="related-card" key={i}>
                <div className="related-emoji">{s.emoji}</div>
                <h4>{s.title}</h4>
                <p>{s.short}</p>
                <span className="sc-link" style={{ marginTop: 'auto', paddingTop: 10, borderTop: '1px solid var(--light-gray)' }}>
                  Learn More <FaArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
