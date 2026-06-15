import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaSearch } from 'react-icons/fa';
import './Projects.css';

const categories = ['All', 'Automation', 'Fabrication', 'Turnkey', 'Relocation', 'Robotics', 'Digital'];

const projects = [
  {
    cat: 'Automation',
    title: 'Assembly Line Automation',
    img: 'https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwZmFjdG9yeSUyMHByb2plY3R8ZW58MXx8fHwxNzY3MjQ2MjYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    desc: 'Complete automation of automotive assembly line with robotic welding, PLC integration, and real-time monitoring systems. Achieved 40% increase in production efficiency.',
    tags: ['Automotive', 'PLC', 'Robotics', 'SCADA'],
    client: 'Leading Automotive OEM',
  },
  {
    cat: 'Fabrication',
    title: 'Custom Steel Fabrication',
   img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    desc: 'Design and fabrication of custom MS/SS structures, platforms, and material handling racks for a major manufacturing facility. Delivered on-time with zero defects.',
    tags: ['MS Fabrication', 'SS Fabrication', 'Platforms', 'Racks'],
    client: 'Manufacturing Facility, Pune',
  },
  {
    cat: 'Turnkey',
    title: 'Turnkey Plant Setup',
    img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    desc: 'End-to-end turnkey project including design, procurement, installation, and commissioning of complete manufacturing plant with MES integration.',
    tags: ['Turnkey', 'MES', 'Commissioning', 'Integration'],
    client: 'Automotive Tier-1 Supplier',
  },
  {
    cat: 'Relocation',
    title: 'Automotive Assembly Line Relocation',
    img: 'https://images.unsplash.com/photo-1766923733164-8a97caf8c0dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3NlbWJseSUyMGxpbmUlMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc2NzI0MDUwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    desc: 'Complete relocation of a 3-shift car assembly line, including body shop, engine shop and trim lines, with zero production loss and on-schedule restart.',
    tags: ['Relocation', 'Assembly Line', 'Body Shop', 'Automotive'],
    client: 'Global Automotive Brand',
  },
  {
    cat: 'Robotics',
    title: 'Robotic Welding Cell Integration',
    img: 'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9ib3RpY3MlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2NzI0NjIzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    desc: 'Integration of 6-axis robotic welding cells in an automotive body shop including programming, commissioning, and safety fencing installation.',
    tags: ['Robotics', 'Welding', 'Automation', 'Safety'],
    client: 'Automotive Body Shop',
  },
  {
    cat: 'Digital',
    title: 'MES Implementation — Production Floor',
    img: 'https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwZmFjdG9yeSUyMHByb2plY3R8ZW58MXx8fHwxNzY3MjQ2MjYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    desc: 'Full MES implementation across a 3-shift production facility with real-time OEE tracking, quality management integration, and ERP connectivity.',
    tags: ['MES', 'OEE', 'Digital', 'ERP Integration'],
    client: 'FMCG Manufacturer',
  },
  {
    cat: 'Fabrication',
    title: 'Mezzanine Platform & Warehouse Racking',
    img: 'https://images.unsplash.com/photo-1721937718756-3bfec49f42a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBtYXRlcmlhbCUyMGhhbmRsaW5nfGVufDF8fHx8MTc2NzI0MDUwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    desc: 'Design and construction of a two-level mezzanine platform with integrated storage racks for a large distribution center, increasing storage capacity by 60%.',
    tags: ['Fabrication', 'Mezzanine', 'Warehouse', 'Storage'],
    client: 'Logistics & Warehousing Company',
  },
  {
    cat: 'Automation',
    title: 'Conveyor System — Automotive Plant',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
    desc: 'Design and installation of a complete overhead and floor conveyor system for an automotive plant, connecting all major assembly stations.',
    tags: ['Conveyor', 'Material Handling', 'Automotive'],
    client: 'Automotive Assembly Plant',
  },
  {
    cat: 'Turnkey',
    title: 'Electrical Panel Manufacturing & Erection',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    desc: 'In-house manufacturing of 24 MCC and control panels followed by complete site erection, cabling, and commissioning for a new manufacturing facility.',
    tags: ['Electrical', 'Panel Manufacturing', 'Commissioning'],
    client: 'Manufacturing Plant, Pune',
  },
];

const Projects = () => {
  const [active, setActive] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = projects.filter(p => {
    const matchCat    = active === 'All' || p.cat === active;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
                        p.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="projects-page">

      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80)' }} />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1>Our Projects</h1>
          <div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Projects</span></div>
          <p className="page-hero-sub">Explore our successful project implementations across various industries.</p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="projects-filter-bar">
        <div className="container projects-filter-inner">
          <div className="filter-cats">
            {categories.map(c => (
              <button key={c} className={`filter-btn ${active === c ? 'filter-btn--active' : ''}`} onClick={() => setActive(c)}>
                {c}
              </button>
            ))}
          </div>
          <div className="filter-search">
            <FaSearch />
            <input type="text" placeholder="Search projects..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="projects-empty">
              <p>No projects found matching your search.</p>
              <button className="btn-outline-orange" onClick={() => { setActive('All'); setSearch(''); }}>Clear Filters</button>
            </div>
          ) : (
            <div className="projects-grid">
              {filtered.map((p, i) => (
                <div className="project-card" key={i}>
                  <div className="project-img">
                    <img src={p.img} alt={p.title} />
                    <div className="project-img-overlay" />
                    <span className="project-cat">{p.cat}</span>
                  </div>
                  <div className="project-body">
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-client"><strong>Client:</strong> {p.client}</p>
                    <p className="project-desc">{p.desc}</p>
                    <div className="project-tags">
                      {p.tags.map((t, j) => <span key={j} className="project-tag">{t}</span>)}
                    </div>
                    <Link to="/contact" className="sc-link" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--light-gray)' }}>
                      Enquire About This Project <FaArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="projects-cta">
        <div className="container projects-cta-inner">
          <div>
            <h2>Have a Similar Project in Mind?</h2>
            <p>Let's talk and build it together with Marscon India's expertise.</p>
          </div>
          <Link to="/contact" className="btn-primary">Get In Touch <FaArrowRight /></Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
