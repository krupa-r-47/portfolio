import { useState } from "react";
import "./App.css";
import bookStoreImage from "../assets/book-store-img.png";
import apiMonitorImage from "../assets/api-monitor-dashboard-img.png";

const projects = [
  {
    number: "01",
    title: "MERN Book Store",
    image: bookStoreImage,
    description:
      "A full-stack book store application with authentication, book management and an admin dashboard.",
    accent: "blue",
    clientRepo: "https://github.com/krupa-r-108/bookStore_client",
    serverRepo: "https://github.com/krupa-r-108/bookStore_server",
  },
  {
    number: "02",
    title: "E-commerce & API Monitoring",
    image: apiMonitorImage,
    description:
      "Building an e-commerce platform alongside a backend API monitoring system.",
    status: "In Progress",
    accent: "mint",
    backendRepo: "https://github.com/krupa-r-47/backend",
  },
];

const skills = [
  'Node.js',
  'Express.js',
  'JavaScript',
  'MySQL',
  'RabbitMQ',
  'MQTT',
  'React.js',
  'Git',
  'PM2',
];

const resumeUrl = import.meta.env.VITE_RESUME_URL;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a
          className="brand"
          href="#top"
          onClick={closeMenu}
          aria-label="Back to top"
        >
          KRUPA<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
        </button>
        <nav
          className={menuOpen ? "site-nav is-open" : "site-nav"}
          aria-label="Main navigation"
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
        <a className="header-cta" href="mailto:krupa.rangaswamy@gmail.com">
          Let's talk <span aria-hidden="true">↗</span>
        </a>
      </header>
      <main id="top">
        <section className="hero-section section-wrap">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true"></span>
              BACKEND DEVELOPER  NODE.JS  EXPRESS.JS  MYSQL
            </p>
            <h1>
              Beyond APIs.
              <br />
              <em>Building systems</em>
              <br />
              that work.
            </h1>
            <p className="hero-intro">
              Hi, I'm <strong>Krupa</strong>, a Backend Developer working
              across business logic, database architecture, asynchronous
              processing and production systems.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Projects
              </a>
              {resumeUrl && (
                <a className="button button-secondary" href={resumeUrl} target="_blank" rel="noreferrer" aria-label="View resume">
                  Download Resume
                </a>
              )}
            </div>
          </div>
        </section>
        <section id="about" className="section-wrap about-section">
          <div className="section-label">
            <span>01</span>
            <span>About me</span>
          </div>
          <div className="about-content">
            <h2>
              Understanding problems.
              <br />
              <em>Building solutions.</em>
            </h2>
            <div className="about-text">
              <p>
                I'm a Backend Developer working primarily with Node.js,
                Express.js and MySQL. I enjoy taking features from requirements
                to implementation, working through complex logic and making
                production systems more reliable.
              </p>
            </div>
          </div>
        </section>
<section id="experience" className="section-wrap experience-section">
  <div className="section-label">
    <span>02</span>
    <span>Experience</span>
  </div>

  <div className="experience-content">
    <h2>
      From frontend to
      <br />
      <em>backend.</em>
    </h2>

    <div className="timeline">
      <div className="timeline-item">
        <span className="timeline-year">March 2025 - May 2025</span>
        <div>
          <h3>
            Frontend Developer Intern <small>Mettsenia Solutions Pvt. Ltd.</small>
          </h3>
          <p>
            Worked on React.js application development before transitioning to
            backend engineering.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <span className="timeline-year">May 2025 - Present</span>
        <div>
          <h3>
            Backend Developer <small>Mettsenia Solutions Pvt. Ltd.</small>
          </h3>
          <p>
            Designing and developing core backend functionality for production
            applications, spanning business logic, device management, billing
            systems and asynchronous processing. Working with Node.js, MySQL
            and RabbitMQ, from feature design and implementation to testing and
            production issue resolution.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
        <section id="projects" className="section-wrap projects-section">
          <div className="section-heading">
            <div className="section-label">
              <span>03</span>
              <span>Selected work</span>
            </div>
            <h2>
              Things I've
              <br />
              <em>built recently.</em>
            </h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-visual ${project.accent}`}>
                  <img
                    className="project-image"
                    src={project.image}
                    alt={`${project.title} project preview`}
                  />
                  <span className="project-number">{project.number}</span>
                  <span className="project-arrow">{"\u2197"}</span>

                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {(project.clientRepo || project.serverRepo || project.backendRepo) && (
                    <div className="project-links">
                      {project.clientRepo && (
                        <a href={project.clientRepo} target="_blank" rel="noreferrer">Client repository <span aria-hidden="true">{"\u2197"}</span></a>
                      )}
                      {project.serverRepo && (
                        <a href={project.serverRepo} target="_blank" rel="noreferrer">Server repository <span aria-hidden="true">{"\u2197"}</span></a>
                      )}
                      {project.backendRepo && (
                        <a href={project.backendRepo} target="_blank" rel="noreferrer">Backend repository <span aria-hidden="true">{"\u2197"}</span></a>
                      )}
                    </div>
                  )}
                  {project.status && (
                    <div className="tag-list">
                      <span className="project-status">{project.status}</span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="section-wrap skills-section">
          <div className="section-label">
            <span>05</span>
            <span>Technical toolkit</span>
          </div>
          <div className="skills-content">
            <h2>
              Tools I use to
              <br />
              <em>bring ideas to life.</em>
            </h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill" key={skill}>
                  <span>*</span>
                  {skill}

                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section section-wrap">
          <div className="contact-orbit orbit-one"></div>
          <div className="contact-orbit orbit-two"></div>
          <div className="section-label">
            <span>06</span>
            <span>Contact</span>
          </div>
          <h2>
            Let's build
            <br />
            <em>something meaningful.</em>
          </h2>
          <p>
            Open to backend development opportunities and interesting
            technical challenges.
          </p>
          <a
            className="button button-primary"
            href="mailto:krupa.rangaswamy@gmail.com"
          >
            Mail me <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
      <footer>
        <span>© {new Date().getFullYear()} Krupa</span>
        <span>Built with React</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;















