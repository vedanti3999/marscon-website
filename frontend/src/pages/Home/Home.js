import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPlay, FaIndustry, FaProjectDiagram, FaSmile, FaShieldAlt, FaQuoteLeft } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Home.css';
import fiat from "../../assets/fiat.jpg";
import ford from "../../assets/ford.jpg";
import volkswagen from "../../assets/volkswagen.png";
import gedia from "../../assets/gedia.jpg";
import hero from "../../assets/hero.jpg";
import companyVideo from "../../assets/video.mp4";
import image1 from "../../assets/image1.jpeg";

/* ── Real data from marscon.in ── */
const services = [
  {
    emoji: '🏭',
    title: 'Turnkey & Project Services',
    desc: 'Complete end-to-end project execution from planning to commissioning, including assembly line relocation and comprehensive consultancy services.',
    points: ['Turnkey Projects','Relocation of Assembly Lines','Consultancy & Project Planning','Installation & Commissioning'],
    img: 'https://images.unsplash.com/photo-1766923733164-8a97caf8c0dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3NlbWJseSUyMGxpbmUlMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc2NzI0MDUwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    path: '/services/turnkey-projects',
  },
  {
    emoji: '⚙️',
    title: 'Automation & Controls',
    desc: 'Advanced automation solutions including robotics integration, PLC programming, SCADA systems, and comprehensive electrical panel design and manufacturing.',
    points: ['Industrial Automation Solutions','Robotics & Manufacturing Automation','PLC / SCADA / HMI Development','Electrical Design & Panel Manufacturing'],
    img: 'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9ib3RpY3MlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2NzI0NjIzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    path: '/services/automation',
  },
  {
    emoji: '📐',
    title: 'Design & Product Engineering',
    desc: 'Comprehensive product development and design services including mechanical engineering, CAD modeling, 3D visualization, and technical drawings.',
    points: ['Product Development','Product Design','Mechanical & Design Services','CAD / 3D Modeling & Drawings'],
    img: 'https://images.unsplash.com/photo-1747999918007-e3442cabb23a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDQUQlMjBkZXNpZ24lMjBlbmdpbmVlcmluZ3xlbnwxfHx8fDE3NjcyNDYyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    path: '/services/product-development',
  },
  {
    emoji: '🔧',
    title: 'Fabrication & Build',
    desc: 'Expert fabrication services for MS and SS materials, custom fixtures, platforms, racks, and specialized structures tailored to your requirements.',
    points: ['Fabrication (MS & SS)','Custom Fixtures & Structures','Platforms, Racks & Special Fabrications'],
    img: 'https://images.unsplash.com/photo-1745448797900-35d08e85e9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFicmljYXRpb24lMjB3ZWxkaW5nfGVufDF8fHx8MTc2NzI0MDUwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    path: '/services/fabrication',
  },
  {
    emoji: '💻',
    title: 'Digital Manufacturing',
    desc: 'Modern digital solutions including MES implementation, machine integration, real-time data monitoring, and process optimization systems.',
    points: ['Manufacturing Execution System (MES)','Machine Integration','Data & Process Monitoring'],
    img: 'https://images.unsplash.com/photo-1721937718756-3bfec49f42a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBtYXRlcmlhbCUyMGhhbmRsaW5nfGVufDF8fHx8MTc2NzI0MDUwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    path: '/services/mes',
  },
  {
  emoji: '🏗️',
  title: 'Material Storage Systems',
  desc: 'Efficient material storage and handling solutions designed to optimize warehouse operations, improve inventory management, maximize space utilization, and ensure smooth material flow across industrial facilities.',
  points: [
    'Warehouse Storage Solutions',
    'Racking & Shelving Systems',
    'Material Handling Equipment',
    'Inventory Management Support'
  ],
  img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
  path: '/services/material-storage-systems',
},
];

const industries = [
  { emoji:'🚗', title:'Automotive Manufacturing',   desc:'Complete automation and assembly line solutions for automotive plants, including welding, painting, and final assembly operations.' },
  { emoji:'🏗️', title:'Engineering & Heavy Industry',desc:'Specialized material handling and fabrication services for heavy equipment manufacturers and industrial machinery production.' },
  { emoji:'📦', title:'Warehousing & Logistics',    desc:'Comprehensive conveyor systems, storage solutions, and material tracking for distribution centers and warehouses.' },
  { emoji:'🏪', title:'FMCG & Packaging',           desc:'Hygienic material handling systems and packaging automation for fast-moving consumer goods industries.' },
  { emoji:'⚡', title:'General Manufacturing',      desc:'Versatile automation and fabrication solutions for diverse manufacturing operations and production facilities.' },
{
  emoji: '⚡', title: 'Energy Sectors', desc: 'Comprehensive engineering, installation, maintenance, and infrastructure solutions for power generation, transmission, renewable energy, and industrial energy facilities.'
},
{
  emoji: '🛢️',
  title: 'Oil & Gas Sectors',
  desc: 'Specialized engineering, fabrication, installation, and maintenance services for oil & gas facilities, refineries, pipelines, storage terminals, and industrial processing plants.'
},
{
  emoji: '🤖',
  title: 'INDUSTRIAL AUTOMATION',
  desc: 'Advanced automation solutions including robotics integration, PLC systems, process control, and smart manufacturing technologies.'
},
{
  emoji: '🔌',
  title: 'FACTORY ELECTRIFICATION',
  desc: 'Complete industrial electrification services covering power distribution, cable routing, control panels, and electrical infrastructure.'
},
{
  emoji: '🚚',
  title: 'MATERIAL HANDLING SYSTEMS',
  desc: 'Customized conveyor systems, storage solutions, lifting equipment, and material flow optimization for industrial facilities.'
},
];

const projects = [
  {
    cat: 'Automation Project',
    title: 'Assembly Line Automation',
    desc: 'Complete automation of automotive assembly line with robotic welding, PLC integration, and real-time monitoring systems. Achieved 40% increase in production efficiency.',
    img: 'https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwZmFjdG9yeSUyMHByb2plY3R8ZW58MXx8fHwxNzY3MjQ2MjYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    cat: 'Fabrication Project',
    title: 'Custom Steel Fabrication',
    desc: 'Design and fabrication of custom MS/SS structures, platforms, and material handling racks for a major manufacturing facility. Delivered on-time with zero defects.',
img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
  },
  {
    cat: 'Turnkey Project',
    title: 'Turnkey Plant Setup',
    desc: 'End-to-end turnkey project including design, procurement, installation, and commissioning of complete manufacturing plant with MES integration.',
    img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
  },
];

const testimonials = [
  {
    text: 'Marscon India LLP has been instrumental in upgrading our assembly line automation. Their technical expertise and commitment to quality have significantly improved our production efficiency.',
    name: 'Production Manager',
    role: 'Leading Automotive Company',
  },
  {
    text: 'Their material handling solutions transformed our warehouse operations. The team was professional, delivered on time, and provided excellent post-installation support.',
    name: 'Operations Director',
    role: 'Manufacturing & Logistics Firm',
  },
  {
    text: 'Marscon successfully managed the relocation and recommissioning of our production line with minimal downtime. Their planning and execution exceeded our expectations.',
    name: 'Plant Head',
    role: 'Global Automotive Manufacturer',
  },
  {
    text: 'The quality of fabrication and installation work delivered by Marscon was exceptional. Their team maintained the highest safety standards throughout the project.',
    name: 'Project Manager',
    role: 'Heavy Engineering Company',
  },
  {
    text: 'From design support to commissioning, Marscon provided end-to-end solutions that helped us achieve our project milestones ahead of schedule.',
    name: 'Engineering Director',
    role: 'Industrial Manufacturing Group',
  },
  {
    text: 'Their expertise in robotics integration and factory automation significantly enhanced our operational efficiency and reduced manual intervention.',
    name: 'Automation Lead',
    role: 'Advanced Manufacturing Facility',
  },
  {
    text: 'Marscon’s electrical infrastructure and plant electrification services were delivered with outstanding professionalism and technical precision.',
    name: 'Maintenance Manager',
    role: 'Energy Sector Company',
  },
  {
    text: 'We were impressed by Marscon’s ability to handle complex material handling and conveyor system installations while maintaining strict project timelines.',
    name: 'Operations Manager',
    role: 'Warehousing & Logistics Organization',
  },
];

const clients = [
  { name: 'Tata Motors',         cat: 'Automotive',            logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg' },
  { name: 'Mahindra & Mahindra', cat: 'Automotive',            logo: 'https://www.mahindra.com/sites/default/files/2023-10/key-event-2000_0.webp' },
  { name: 'Bajaj Auto',          cat: 'Automotive',            logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Bajaj_Auto_logo.svg' },
  { name: 'Lyric Robot',         cat: 'Robotics',              logo: 'https://en.lyric-robot.com/assets/images/logo.jpg' },

  { name: 'Fiat',               cat: 'Engineering',            logo: fiat },
  { name: 'Ford',               cat: 'Automotive Components',  logo: ford },
  { name: 'Volkswagen',         cat: 'Technology',             logo: volkswagen },

  { name: 'Automag',            cat: 'Manufacturing',          logo: 'https://automagindia.com/assets/images/logo/logo-dark.png' },

  { name: 'GEDIA',              cat: 'Innovation',             logo: gedia},
  { name: 'Nakanishi Metal Works', cat: 'Metal Works',         logo: 'https://www.nkc-j.co.jp/wp-content/themes/NKC/en/assets/img/common/header_logo.svg' },
];;

function StatItem({ icon, end, suffix, label }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-number">{inView ? <CountUp end={end} duration={2.2} suffix={suffix} /> : `0${suffix}`}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

const Home = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [videoModal,     setVideoModal]     = useState(false);

  useEffect(() => {
    const t = setInterval(() => setTestimonialIdx(p => (p + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="home">
{/* ── HERO ── */}
<section className="hero">
  <div
    className="hero-bg"
    style={{ backgroundImage: `url(${hero})` }}>  
    
 
    </div>

  <div className="hero-overlay"></div>

  <div className="container hero-content">
    <span className="hero-tag">Your Reliable Engineering Partner</span>

    <h1 className="hero-title">
      Smart Industrial Solutions for<br />
      Reliable, Efficient Manufacturing
    </h1>

    <p className="hero-sub">
      Marscon India delivers turnkey industrial projects, automation, fabrication,
      and assembly-line solutions that improve productivity, safety, and quality.
      From design and development to installation, commissioning, and long-term support
      — we help manufacturers build smarter factories.
    </p>

    <div className="hero-btns">
      <Link to="/services" className="btn-primary">
        Our Services <FaArrowRight />
      </Link>

      <Link to="/contact" className="btn-secondary">
        Contact Us
      </Link>

      <button
        className="hero-play-btn"
        onClick={() => setVideoModal(true)}
        aria-label="Play"
      >
        <FaPlay />
      </button>
    </div>
  </div>
</section>

      {/* ── STATS ── */}
      <section className="stats-bar">
        <div className="container stats-grid">
          <StatItem icon={<FaProjectDiagram />} end={50}  suffix="+" label="Projects Completed" />
          <StatItem icon={<FaSmile />}          end={30}  suffix="+" label="Happy Clients" />
          <StatItem icon={<FaIndustry />}       end={5}   suffix="+" label="Years Experience" />
          <StatItem icon={<FaShieldAlt />}      end={100} suffix="%" label="Quality Commitment" />
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="section-pad about-strip">
        <div className="container about-strip-inner">
          <div className="about-strip-content">
            <span className="section-tag">About Marscon India LLP</span>
            <h2 className="section-title">Engineering-Driven Industrial Solutions</h2>
            <p>Marscon India is an engineering-driven industrial solutions company specializing in turnkey projects, automation, fabrication, and assembly-line integration. We work closely with manufacturing organizations to design, build, upgrade, and optimize production systems that improve efficiency, safety, and reliability.</p>
            <p style={{marginTop:14}}>Our capabilities span product development, mechanical and electrical design, PLC-SCADA-HMI development, MES implementation, panel manufacturing, and custom MS/SS fabrication. With hands-on execution teams and strong technical expertise, we deliver complete solutions — from concept and engineering to installation, commissioning, and long-term support.</p>
            <Link to="/about" className="btn-primary" style={{marginTop:28}}>Learn More <FaArrowRight /></Link>
          </div>
          <div className="about-strip-img">
            <img src= {image1} alt="Marscon India" />
            <div className="about-strip-badge">
              <span className="badge-num">5+</span>
              <span className="badge-label">Years of Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section-pad services-section">
        <div className="container">
          <div className="text-center" style={{marginBottom:52}}>
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive engineering solutions designed to meet the evolving needs of modern manufacturing and industrial operations.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <Link to={s.path} className="service-card" key={i}>
                <div className="service-card-img">
                  <img src={s.img} alt={s.title} />
                  <div className="sc-overlay" />
                  <div className="sc-emoji">{s.emoji}</div>
                </div>
                <div className="service-card-body">
                  <h3 className="sc-title">{s.title}</h3>
                  <p className="sc-desc">{s.desc}</p>
                  <ul className="sc-points">
                    {s.points.map((p, j) => <li key={j}><span className="sc-bullet" />{p}</li>)}
                  </ul>
                  <span className="sc-link">Learn More <FaArrowRight /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="section-pad industries-section">
        <div className="container">
          <div className="text-center" style={{marginBottom:48}}>
            <span className="section-tag">Sectors We Serve</span>
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">We serve diverse industries with tailored engineering solutions that address specific operational challenges and requirements.</p>
          </div>
          <div className="industries-grid">
            {industries.map((ind, i) => (
              <Link to="/industries" className="industry-card" key={i}>
                <div className="ind-emoji">{ind.emoji}</div>
                <h3 className="ind-title">{ind.title}</h3>
                <p className="ind-desc">{ind.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="section-pad projects-section">
        <div className="container">
          <div className="text-center" style={{marginBottom:48}}>
            <span className="section-tag">Our Work</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Explore our successful project implementations across various industries, showcasing our expertise in delivering complex engineering solutions.</p>
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div className="proj-card" key={i}>
                <div className="proj-img">
                  <img src={p.img} alt={p.title} />
                  <span className="proj-cat">{p.cat}</span>
                </div>
                <div className="proj-body">
                  <h3 className="proj-title">{p.title}</h3>
                  <p className="proj-desc">{p.desc}</p>
                  <Link to="/projects" className="sc-link">View Details <FaArrowRight /></Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{marginTop:40}}>
            <Link to="/projects" className="btn-outline-orange">View All Projects <FaArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-pad testimonials-section">
        <div className="container">
          <div className="text-center" style={{marginBottom:48}}>
            <span className="section-tag">Client Stories</span>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className="testimonials-wrapper">
            {testimonials.map((t, i) => (
              <div className={`testimonial-card ${i === testimonialIdx ? 'testimonial-card--active' : ''}`} key={i}>
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name[0]}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button key={i} className={`t-dot ${i === testimonialIdx ? 't-dot--active' : ''}`} onClick={() => setTestimonialIdx(i)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section className="section-pad clients-section">
        <div className="container">
          <div className="text-center" style={{marginBottom:40}}>
            <span className="section-tag">Our Valued Clients</span>
            <h2 className="section-title">Trusted by Industry Leaders</h2>
            <p className="section-subtitle">Trusted by leading manufacturing companies across India for delivering excellence in industrial engineering solutions.</p>
          </div>
          <div className="clients-grid">
            {clients.map((c, i) => (
              <div className="client-card" key={i}>
                {c.logo
                  ? <img src={c.logo} alt={c.name} className="client-logo-img" />
                  : <div className="client-logo-text">{c.name}</div>
                }
                <div className="client-name">{c.name}</div>
                <div className="client-cat">{c.cat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <div>
            <h2>Ready to Build Smarter Factories?</h2>
            <p>Get in touch with us to discuss your industrial engineering needs. Our team is ready to help you achieve operational excellence.</p>
          </div>
          <Link to="/contact" className="btn-primary cta-btn">Get in Touch <FaArrowRight /></Link>
        </div>
      </section>

        {/* Video Modal */}
      {videoModal && (
        <div className="video-modal" onClick={() => setVideoModal(false)}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-modal-close"
              onClick={() => setVideoModal(false)}
            >
              ✕
            </button>

            <video controls autoPlay>
              <source src={companyVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;


