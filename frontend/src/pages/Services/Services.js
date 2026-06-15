import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Services.css';

export const ALL_SERVICES = [
  {
    slug: 'turnkey-projects', emoji: '🏭', group: 'Turnkey & Project Services',
    title: 'Turnkey Projects',
    short: 'Complete end-to-end project execution from planning to commissioning.',
    img: 'https://images.unsplash.com/photo-1575305842946-0e807ce6f3fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJua2V5JTIwbWFudWZhY3R1cmluZyUyMHByb2plY3R8ZW58MXx8fHwxNzY3MjQ2MjYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    desc: 'Marscon India executes complete turnkey industrial projects — from initial concept and engineering through procurement, fabrication, installation, and commissioning. We are your single point of accountability for the entire project lifecycle.',
    points: ['Full Project Planning & Engineering','Procurement & Supply Chain Management','Installation & Commissioning','Project Management & Reporting','Handover & Long-Term Support'],
  },
  {
    slug: 'relocation', emoji: '🔄', group: 'Turnkey & Project Services',
    title: 'Relocation of Assembly Lines',
    short: 'Professional relocation of complete assembly lines with minimum downtime.',
    img: 'https://images.unsplash.com/photo-1766923733164-8a97caf8c0dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3NlbWJseSUyMGxpbmUlMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc2NzI0MDUwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    desc: 'We specialize in the complete relocation of automotive and industrial assembly lines. Our experienced teams handle decommissioning, rigging, transport, re-installation and recommissioning with minimal disruption to your production schedule.',
    points: ['Assembly Line De-commissioning','Machine & Equipment Rigging','Transportation Management','Re-installation & Alignment','Commissioning & Production Restart'],
  },
  {
    slug: 'consultancy', emoji: '📋', group: 'Turnkey & Project Services',
    title: 'Consultancy & Project Planning',
    short: 'Expert consultancy for industrial project planning and execution strategy.',
    img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80',
    desc: 'Our senior engineers and project managers provide expert consultancy services covering feasibility studies, plant layout planning, project scheduling, risk assessment, and execution strategy for complex industrial projects.',
    points: ['Feasibility Studies','Plant Layout & Space Planning','Project Scheduling (Gantt / CPM)','Risk Assessment & Mitigation','Vendor Selection & Management'],
  },
  {
    slug: 'installation-commissioning', emoji: '🔩', group: 'Turnkey & Project Services',
    title: 'Installation & Commissioning',
    short: 'Professional installation and commissioning of industrial machinery and systems.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    desc: 'Marscon India provides expert installation and commissioning services for a wide range of industrial machinery, production lines, and automation systems. We ensure every system is installed correctly, tested thoroughly, and handed over production-ready.',
    points: ['Mechanical Installation & Alignment','Electrical Connection & Testing','Functional & Performance Testing','Operator Training','Documentation & Handover'],
  },
  {
    slug: 'automation', emoji: '⚙️', group: 'Automation & Controls',
    title: 'Industrial Automation Solutions',
    short: 'End-to-end industrial automation for improved productivity and quality.',
    img: 'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9ib3RpY3MlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2NzI0NjIzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    desc: 'We design and implement comprehensive industrial automation solutions that transform traditional manufacturing processes into smart, efficient systems. Our automation expertise covers all major platforms and industries.',
    points: ['Process Automation Design','Machine Automation','Conveyor & Material Handling Automation','Quality Inspection Automation','Safety System Integration'],
  },
  {
    slug: 'robotics', emoji: '🤖', group: 'Automation & Controls',
    title: 'Robotics & Manufacturing Automation',
    short: 'Robotic integration for precision, speed, and consistent quality.',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80',
    desc: 'Our robotics division specializes in integrating robotic systems into existing and new manufacturing facilities. From welding and painting to assembly and material handling, we deliver robotic solutions that enhance productivity and consistency.',
    points: ['Welding Robots (MIG/TIG/Spot)','Painting & Coating Robots','Assembly Robots','Material Handling Robots','Robot Programming & Commissioning'],
  },
  {
    slug: 'plc-scada-hmi', emoji: '🖥️', group: 'Automation & Controls',
    title: 'PLC / SCADA / HMI Development',
    short: 'Custom PLC programming, SCADA systems and HMI development.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    desc: 'Marscon India develops custom PLC programs, SCADA supervisory control systems, and intuitive HMI interfaces. We work with all major platforms including Siemens, Allen-Bradley, Mitsubishi, and more.',
    points: ['PLC Programming (Siemens, Allen-Bradley, Mitsubishi)','SCADA System Development','HMI Screen Design & Development','Control System Integration','Remote Monitoring & Diagnostics'],
  },
  {
    slug: 'electrical-design', emoji: '⚡', group: 'Automation & Controls',
    title: 'Electrical Design & Panel Manufacturing',
    short: 'Complete electrical design, panel manufacturing and site execution.',
    img: 'https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?w=600&q=80',
    desc: 'We provide complete electrical engineering services from design through to panel manufacturing and site installation. Our in-house panel shop ensures quality-controlled manufacturing to exact specifications.',
    points: ['Electrical Design & Schematics','MCC / PCC / Control Panel Manufacturing','Cable Sizing & Routing','Site Installation & Testing','Electrical Safety Compliance'],
  },
  {
    slug: 'product-development', emoji: '💡', group: 'Design & Product Engineering',
    title: 'Product Development',
    short: 'End-to-end product development from concept to production-ready design.',
    img: 'https://images.unsplash.com/photo-1747999918007-e3442cabb23a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDQUQlMjBkZXNpZ24lMjBlbmdpbmVlcmluZ3xlbnwxfHx8fDE3NjcyNDYyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    desc: 'From concept to production-ready design, our product development team guides clients through the full product lifecycle. We combine design expertise with manufacturing knowledge to create products that perform and can be efficiently produced.',
    points: ['Concept Design & Ideation','Prototyping & Validation','DFM (Design for Manufacturability)','Testing & Certification Support','Production Documentation'],
  },
  {
    slug: 'product-design', emoji: '📐', group: 'Design & Product Engineering',
    title: 'Product Design',
    short: 'Creative and functional product design combining aesthetics and engineering.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    desc: 'Our product design team combines creative thinking with engineering principles to develop products that are functional, manufacturable, and market-ready. We bring a user-centric approach to every design challenge.',
    points: ['Industrial Design','Ergonomics & User Experience','Material Selection','Visual Design & Rendering','Design Review & Validation'],
  },
  {
    slug: 'mechanical-design', emoji: '🔧', group: 'Design & Product Engineering',
    title: 'Mechanical & Design Services',
    short: 'Comprehensive mechanical engineering and design services for industry.',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
    desc: 'Our mechanical engineering team delivers detailed design, analysis, and documentation services for industrial equipment, fixtures, special purpose machines, and production tooling.',
    points: ['Mechanical Design & Engineering','Structural Analysis','Jig & Fixture Design','SPM (Special Purpose Machine) Design','Engineering Documentation'],
  },
  {
    slug: 'cad-3d-modeling', emoji: '🗺️', group: 'Design & Product Engineering',
    title: 'CAD / 3D Modeling & Drawings',
    short: 'Professional CAD and 3D modeling services for manufacturing projects.',
    img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80',
    desc: 'We provide high-quality CAD and 3D modeling services using industry-standard software. Our drafting team produces accurate technical drawings, assembly models, and documentation packages to support manufacturing and installation.',
    points: ['2D CAD Drafting (AutoCAD)','3D Solid Modeling (SolidWorks, CATIA)','Assembly Modeling','GD&T Drawing Preparation','As-Built Documentation'],
  },
  {
    slug: 'fabrication', emoji: '🔩', group: 'Fabrication & Build',
    title: 'Fabrication (MS & SS)',
    short: 'Precision fabrication in mild steel and stainless steel for industrial use.',
    img: 'https://images.unsplash.com/photo-1745448797900-35d08e85e9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFicmljYXRpb24lMjB3ZWxkaW5nfGVufDF8fHx8MTc2NzI0MDUwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    desc: 'Our fabrication workshop handles mild steel and stainless steel fabrication for industrial structures, equipment frames, platforms, and custom components. We combine skilled craftsmanship with modern equipment for high-quality results.',
    points: ['Structural Steel Fabrication','Sheet Metal Fabrication','MIG/TIG/Spot Welding','CNC Cutting & Bending','Surface Finishing & Painting'],
  },
  {
    slug: 'fixtures-structures', emoji: '🏗️', group: 'Fabrication & Build',
    title: 'Custom Fixtures & Structures',
    short: 'Custom-designed fixtures and structures for production and assembly.',
    img: 'https://images.unsplash.com/photo-1766963031218-ef830ce1a017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFicmljYXRpb24lMjBwcm9qZWN0fGVufDF8fHx8MTc2NzI0NjI2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    desc: 'Marscon India designs and builds custom welding fixtures, assembly jigs, gauges, and structural elements to support manufacturing operations. Every fixture is designed for accuracy, durability, and ease of use.',
    points: ['Welding Fixtures & Jigs','Assembly & Checking Fixtures','Gauge Design & Fabrication','Custom Tooling','Quality Inspection Fixtures'],
  },
  {
    slug: 'platforms-racks', emoji: '📦', group: 'Fabrication & Build',
    title: 'Platforms, Racks & Special Fabrications',
    short: 'Heavy-duty platforms, storage racks, and special fabricated structures.',
    img: 'https://images.unsplash.com/photo-1721937718756-3bfec49f42a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBtYXRlcmlhbCUyMGhhbmRsaW5nfGVufDF8fHx8MTc2NzI0MDUwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    desc: 'We fabricate heavy-duty mezzanine platforms, storage rack systems, walkways, handrails, and special purpose structures for industrial facilities. All structures are designed to applicable safety codes and standards.',
    points: ['Mezzanine Platforms','Industrial Storage Racks','Walkways & Handrails','Equipment Support Structures','Canopies & Enclosures'],
  },
  {
    slug: 'mes', emoji: '💻', group: 'Digital Manufacturing',
    title: 'Manufacturing Execution System (MES)',
    short: 'MES implementation for real-time production monitoring and control.',
    img: 'https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwZmFjdG9yeSUyMHByb2plY3R8ZW58MXx8fHwxNzY3MjQ2MjYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    desc: 'We implement Manufacturing Execution Systems that provide real-time visibility into production operations. Our MES solutions connect people, machines, and data to optimize production performance and quality.',
    points: ['Production Order Management','Real-Time Shop Floor Monitoring','Quality Management Integration','OEE Tracking & Analytics','ERP / SAP Integration'],
  },
  {
    slug: 'machine-integration', emoji: '🔌', group: 'Digital Manufacturing',
    title: 'Machine Integration',
    short: 'Connecting machines, systems, and data for a connected factory.',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80',
    desc: 'Marscon India specializes in integrating diverse machines and systems into unified production networks. We bridge legacy equipment with modern control systems to enable data-driven manufacturing.',
    points: ['Machine-to-Machine (M2M) Communication','OPC-UA / MQTT Integration','Legacy Machine Retrofitting','Network & Communication Setup','Industrial IoT Connectivity'],
  },
  {
    slug: 'data-monitoring', emoji: '📊', group: 'Digital Manufacturing',
    title: 'Data & Process Monitoring',
    short: 'Real-time data collection, visualization, and process monitoring systems.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    desc: 'We implement real-time data acquisition, monitoring, and visualization systems that give manufacturers actionable insights into process performance, quality, and equipment health.',
    points: ['Real-Time Data Acquisition','Dashboard & KPI Visualization','Process Parameter Monitoring','Alarm & Alert Management','Historical Data & Reporting'],
  },
];

const serviceGroups = [
  'Turnkey & Project Services',
  'Automation & Controls',
  'Design & Product Engineering',
  'Fabrication & Build',
  'Digital Manufacturing',
];

const Services = () => (
  <div className="services-page">
    <section className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80)' }} />
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        <h1>Our Services</h1>
        <div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Services</span></div>
        <p className="page-hero-sub">Comprehensive engineering solutions designed to meet the evolving needs of modern manufacturing and industrial operations.</p>
      </div>
    </section>

    {serviceGroups.map(group => {
      const groupServices = ALL_SERVICES.filter(s => s.group === group);
      return (
        <section className="section-pad service-group-section" key={group}>
          <div className="container">
            <div style={{ marginBottom: 40 }}>
              <span className="section-tag">{group}</span>
              <h2 className="section-title">{group}</h2>
            </div>
            <div className="sp-grid">
              {groupServices.map((s, i) => (
                <Link to={`/services/${s.slug}`} className="sp-card" key={i}>
                  <div className="sp-img">
                    <img src={s.img} alt={s.title} />
                    <div className="sp-overlay" />
                    <div className="sp-emoji">{s.emoji}</div>
                  </div>
                  <div className="sp-body">
                    <h3 className="sp-title">{s.title}</h3>
                    <p className="sp-desc">{s.short}</p>
                    <span className="sc-link">Learn More <FaArrowRight /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      );
    })}

    <section className="services-cta">
      <div className="container services-cta-inner">
        <div>
          <h2>Need a Custom Industrial Solution?</h2>
          <p>Talk to our experts and get a tailored engineering solution for your requirements.</p>
        </div>
        <Link to="/contact" className="btn-primary">Get In Touch <FaArrowRight /></Link>
      </div>
    </section>
  </div>
);

export default Services;
