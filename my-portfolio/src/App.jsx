import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import profileImage from "./assets/profile.jpeg";

function App() {

  /* ================= STATES ================= */

  const [darkMode, setDarkMode] = useState(false);
  const [activeProject, setActiveProject] = useState("All");

  /* ================= PROJECTS ================= */

  const projects = [
    {
      id: 1,
      name: "Food Delivery Website",
      category: "Web",
      icon: "🍔",
      description:
        "A responsive food delivery website created with a modern user interface, food categories, product cards and interactive JavaScript features.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive"],
      github: "https://github.com/",
      live: "#",
    },
    {
      id: 2,
      name: "Fashion Store Website",
      category: "Web",
      icon: "👗",
      description:
        "A modern fashion e-commerce interface with navigation, product sections, categories and interactive frontend features.",
      technologies: ["HTML", "CSS", "JavaScript", "UI Design"],
      github: "https://github.com/",
      live: "#",
    },
    {
      id: 3,
      name: "Portfolio Website",
      category: "React",
      icon: "💻",
      description:
        "A professional personal portfolio created using React, Bootstrap and modern responsive design techniques.",
      technologies: ["React", "Vite", "Bootstrap", "CSS"],
      github: "https://github.com/",
      live: "#",
    },
    {
      id: 4,
      name: "Power BI Dashboard",
      category: "Dashboard",
      icon: "📊",
      description:
        "An interactive dashboard concept for displaying business information, analytics and visual reports.",
      technologies: ["Power BI", "Data Analysis", "Dashboard"],
      github: "https://github.com/",
      live: "#",
    },
    {
      id: 5,
      name: "Online Job Portal",
      category: "Python",
      icon: "💼",
      description:
        "A project concept for connecting job seekers and recruiters with job listings and application management.",
      technologies: ["Python", "MySQL", "XAMPP"],
      github: "https://github.com/",
      live: "#",
    },
    {
      id: 6,
      name: "AI / ML Project",
      category: "AI",
      icon: "🤖",
      description:
        "A learning project focused on artificial intelligence and machine learning concepts.",
      technologies: ["Python", "AI", "ML"],
      github: "https://github.com/",
      live: "#",
    },
  ];

  const categories = [
    "All",
    "Web",
    "React",
    "Dashboard",
    "Python",
    "AI",
  ];

  const filteredProjects =
    activeProject === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeProject
        );

  /* ================= SKILLS ================= */

  const skills = [
    ["HTML", "bi-filetype-html", "95%"],
    ["CSS", "bi-filetype-css", "90%"],
    ["JavaScript", "bi-filetype-js", "85%"],
    ["React.js", "bi-react", "80%"],
    ["Vite", "bi-lightning-charge", "80%"],
    ["Python", "bi-filetype-py", "75%"],
    ["Node.js", "bi-node-plus", "70%"],
    ["Express.js", "bi-server", "70%"],
    ["MySQL", "bi-database", "80%"],
    ["Git & GitHub", "bi-github", "80%"],
    ["Power BI", "bi-bar-chart", "75%"],
    ["APIs", "bi-cloud-arrow-up", "75%"],
  ];

  /* ================= SERVICES ================= */

  const services = [
    {
      icon: "bi-window-stack",
      title: "Website Development",
      text: "Modern, responsive and user-friendly websites.",
    },
    {
      icon: "bi-code-slash",
      title: "Web Application",
      text: "Interactive web applications using modern technologies.",
    },
    {
      icon: "bi-bootstrap",
      title: "React Development",
      text: "Component-based React applications with clean UI.",
    },
    {
      icon: "bi-hdd-network",
      title: "Backend Development",
      text: "Backend concepts using Node.js, Express and databases.",
    },
    {
      icon: "bi-filetype-py",
      title: "Python Development",
      text: "Python programming and practical project development.",
    },
    {
      icon: "bi-bar-chart-line",
      title: "Dashboard Development",
      text: "Interactive dashboards and data visualization.",
    },
    {
      icon: "bi-diagram-3",
      title: "API Development",
      text: "Working with APIs and connecting applications.",
    },
    {
      icon: "bi-database",
      title: "Database Development",
      text: "SQL databases and data management concepts.",
    },
  ];

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>

      {/* =====================================================
          DAY 1 - NAVBAR
      ===================================================== */}

      <nav className="navbar navbar-expand-lg sticky-top">

        <div className="container">

          <a
            href="#home"
            className="navbar-brand logo"
          >
            Shraddha<span>.</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#portfolioNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="portfolioNavbar"
          >

            <ul className="navbar-nav ms-auto align-items-lg-center">

              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#education">
                  Education
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>

              <li className="nav-item ms-lg-3 mt-2 mt-lg-0">

                <a
                  href="/resume.pdf"
                  download
                  className="resume-btn"
                >
                  <i className="bi bi-download me-1"></i>
                  Resume
                </a>

              </li>

              <li className="nav-item ms-lg-2 mt-2 mt-lg-0">

                <button
                  className="theme-btn"
                  onClick={() => setDarkMode(!darkMode)}
                  title="Toggle theme"
                >
                  {darkMode ? (
                    <i className="bi bi-sun-fill"></i>
                  ) : (
                    <i className="bi bi-moon-fill"></i>
                  )}
                </button>

              </li>

            </ul>

          </div>

        </div>

      </nav>


      {/* =====================================================
          DAY 2 - HERO
      ===================================================== */}

      <section id="home" className="hero-section">

        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-7">

              <div className="hero-content">

                <p className="hero-small">
                  WELCOME TO MY PORTFOLIO
                </p>

                <h1>
                  Hello, I'm{" "}
                  <span>Shraddha Jadhav</span>
                </h1>

                <h2>
                  BCA Student & Aspiring Web Developer
                </h2>

                <p className="hero-description">
                  I am passionate about creating modern,
                  responsive and user-friendly websites.
                  I work with HTML, CSS, JavaScript,
                  React.js and Vite and continuously improve
                  my development skills by building practical
                  projects.
                </p>

                <div className="hero-buttons">

                  <a
                    href="#projects"
                    className="primary-btn"
                  >
                    <i className="bi bi-folder2-open me-2"></i>
                    View Projects
                  </a>

                  <a
                    href="/resume.pdf"
                    download
                    className="secondary-btn"
                  >
                    <i className="bi bi-download me-2"></i>
                    Download Resume
                  </a>

                </div>

                <div className="social-links">

                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>

                  <a href="mailto:shraddhaj492@gmail.com">
                    <i className="bi bi-envelope-fill"></i>
                  </a>

                  <a href="tel:8792505577">
                    <i className="bi bi-telephone-fill"></i>
                  </a>

                </div>

              </div>

            </div>


            <div className="col-lg-5">

              <div className="hero-image-wrapper">

                <div className="image-glow"></div>

                <div className="image-circle">

                  <img
                    src={profileImage}
                    alt="Shraddha Jadhav"
                    className="profile-image"
                  />

                </div>

                <div className="floating-card card-one">
                  <span>💻</span>
                  <div>
                    <strong>Frontend</strong>
                    <small>Developer</small>
                  </div>
                </div>

                <div className="floating-card card-two">
                  <span>⚛️</span>
                  <div>
                    <strong>React.js</strong>
                    <small>Developer</small>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DAY 3 - ABOUT
      ===================================================== */}

      <section id="about" className="section about-section">

        <div className="container">

          <div className="section-heading">

            <p className="section-small">
              ABOUT ME
            </p>

            <h2>
              Know More <span>About Me</span>
            </h2>

            <p>
              My professional journey, strengths and career
              objectives.
            </p>

          </div>

          <div className="row align-items-center g-5">

            <div className="col-lg-7">

              <div className="about-content">

                <h3>
                  I'm Shraddha Jadhav
                </h3>

                <p>
                  I am a BCA student and an aspiring web
                  developer interested in building modern,
                  responsive and user-friendly web applications.
                </p>

                <p>
                  I enjoy learning new technologies and
                  improving my programming and problem-solving
                  skills by creating practical projects.
                </p>

                <p>
                  My career objective is to become a skilled
                  professional developer and contribute to
                  meaningful technology projects.
                </p>

                <div className="about-points">

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Quick Learner
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Problem Solver
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Creative Thinker
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Team Player
                  </div>

                </div>

              </div>

            </div>


            <div className="col-lg-5">

              <div className="about-cards">

                <div className="mini-card">
                  <i className="bi bi-mortarboard-fill"></i>
                  <h4>Education</h4>
                  <p>BCA Student</p>
                </div>

                <div className="mini-card">
                  <i className="bi bi-code-square"></i>
                  <h4>Focus</h4>
                  <p>Web Development</p>
                </div>

                <div className="mini-card">
                  <i className="bi bi-lightning-charge-fill"></i>
                  <h4>Strength</h4>
                  <p>Quick Learning</p>
                </div>

                <div className="mini-card">
                  <i className="bi bi-rocket-takeoff-fill"></i>
                  <h4>Goal</h4>
                  <p>Professional Developer</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DAY 4 - SKILLS
      ===================================================== */}

      <section id="skills" className="section skills-section">

        <div className="container">

          <div className="section-heading">

            <p className="section-small">
              MY SKILLS
            </p>

            <h2>
              Technologies I <span>Work With</span>
            </h2>

            <p>
              Technologies and tools I am learning and using
              in my projects.
            </p>

          </div>


          <div className="row g-4">

            {skills.map((skill, index) => (

              <div
                className="col-sm-6 col-lg-3"
                key={index}
              >

                <div className="skill-card">

                  <div className="skill-icon">
                    <i className={`bi ${skill[1]}`}></i>
                  </div>

                  <h3>{skill[0]}</h3>

                  <div className="skill-progress">

                    <div
                      className="skill-progress-bar"
                      style={{ width: skill[2] }}
                    ></div>

                  </div>

                  <span className="skill-percent">
                    {skill[2]}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          DAY 5 - EXPERIENCE
      ===================================================== */}

      <section
        id="experience"
        className="section experience-section"
      >

        <div className="container">

          <div className="section-heading">

            <p className="section-small">
              EXPERIENCE
            </p>

            <h2>
              My <span>Learning Journey</span>
            </h2>

            <p>
              My experience so far has focused on learning,
              practicing and building projects.
            </p>

          </div>


          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-dot">
                01
              </div>

              <div className="timeline-card">

                <span>
                  Learning & Practice
                </span>

                <h3>
                  Frontend Web Development
                </h3>

                <p>
                  Practicing HTML, CSS and JavaScript by
                  developing responsive and interactive
                  websites.
                </p>

                <div className="tags">
                  <b>HTML</b>
                  <b>CSS</b>
                  <b>JavaScript</b>
                </div>

              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-dot">
                02
              </div>

              <div className="timeline-card">

                <span>
                  React Development
                </span>

                <h3>
                  React.js & Vite
                </h3>

                <p>
                  Building component-based applications and
                  learning modern frontend development using
                  React and Vite.
                </p>

                <div className="tags">
                  <b>React</b>
                  <b>Vite</b>
                  <b>Bootstrap</b>
                </div>

              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-dot">
                03
              </div>

              <div className="timeline-card">

                <span>
                  Personal Projects
                </span>

                <h3>
                  Project Development
                </h3>

                <p>
                  Developing practical projects to improve
                  coding skills, creativity and problem-solving.
                </p>

                <div className="tags">
                  <b>Projects</b>
                  <b>Git</b>
                  <b>GitHub</b>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DAY 6 - EDUCATION
      ===================================================== */}

      <section
        id="education"
        className="section education-section"
      >

        <div className="container">

          <div className="section-heading">

            <p className="section-small">
              EDUCATION
            </p>

            <h2>
              My Educational <span>Background</span>
            </h2>

            <p>
              My academic foundation in computer applications
              and programming.
            </p>

          </div>


          <div className="education-card">

            <div className="education-icon">
              <i className="bi bi-mortarboard-fill"></i>
            </div>

            <div>

              <span className="education-year">
                2023 - 2026
              </span>

              <h3>
                Bachelor of Computer Applications (BCA)
              </h3>

              <h4>
                Vivekanand Institute of Management, Gulbarga
              </h4>

              <p>
                Affiliated to Gulbarga University, Kalaburagi.
                Studying programming, web development,
                databases, software development and modern
                computer technologies.
              </p>

              <div className="tags">
                <b>BCA</b>
                <b>Gulbarga University</b>
                <b>2026</b>
                <b>Computer Applications</b>
              </div>

            </div>

          </div>


          <div className="row g-4 mt-4">

            <div className="col-md-4">
              <div className="education-highlight">
                <strong>2026</strong>
                <span>Passing Year</span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="education-highlight">
                <strong>BCA</strong>
                <span>Degree</span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="education-highlight">
                <strong>GUG</strong>
                <span>University</span>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DAY 7 - PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className="section projects-section"
      >

        <div className="container">

          <div className="section-heading">

            <p className="section-small">
              MY PROJECTS
            </p>

            <h2>
              Projects I've <span>Built</span>
            </h2>

            <p>
              Practical projects created while learning
              different technologies.
            </p>

          </div>


          {/* PROJECT FILTER */}

          <div className="project-filter">

            {categories.map((category) => (

              <button
                key={category}
                className={
                  activeProject === category
                    ? "filter-btn active"
                    : "filter-btn"
                }
                onClick={() =>
                  setActiveProject(category)
                }
              >
                {category}
              </button>

            ))}

          </div>


          <div className="row g-4">

            {filteredProjects.map((project) => (

              <div
                className="col-md-6 col-lg-4"
                key={project.id}
              >

                <div className="project-card">

                  <div className="project-image">
                    <span>{project.icon}</span>
                  </div>

                  <div className="project-body">

                    <span className="project-category">
                      {project.category}
                    </span>

                    <h3>
                      {project.name}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                    <div className="tags">

                      {project.technologies.map(
                        (technology, index) => (
                          <b key={index}>
                            {technology}
                          </b>
                        )
                      )}

                    </div>

                    <div className="project-links">

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bi bi-github"></i>
                        GitHub
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bi bi-box-arrow-up-right"></i>
                        Live Demo
                      </a>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          DAY 8 - SERVICES
      ===================================================== */}

      <section
        id="services"
        className="section services-section"
      >

        <div className="container">

          <div className="section-heading">

            <p className="section-small">
              MY SERVICES
            </p>

            <h2>
              What I Can <span>Do</span>
            </h2>

            <p>
              Services and development areas I am interested
              in working with.
            </p>

          </div>


          <div className="row g-4">

            {services.map((service, index) => (

              <div
                className="col-sm-6 col-lg-3"
                key={index}
              >

                <div className="service-card">

                  <div className="service-icon">

                    <i className={`bi ${service.icon}`}></i>

                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          DAY 9 - CERTIFICATIONS
      ===================================================== */}

      <section
        id="certifications"
        className="section certification-section"
      >

        <div className="container">

          <div className="section-heading">

            <p className="section-small">
              CERTIFICATIONS & ACHIEVEMENTS
            </p>

            <h2>
              My <span>Achievements</span>
            </h2>

          </div>


          <div className="row g-4">

            <div className="col-md-4">

              <div className="certificate-card">

                <i className="bi bi-award-fill"></i>

                <h3>
                  Web Development
                </h3>

                <p>
                  Training and practical learning in
                  frontend web development.
                </p>

                <span>
                  Certificate
                </span>

              </div>

            </div>


            <div className="col-md-4">

              <div className="certificate-card">

                <i className="bi bi-patch-check-fill"></i>

                <h3>
                  React Development
                </h3>

                <p>
                  Learning React.js, components, state,
                  props and modern frontend concepts.
                </p>

                <span>
                  Training
                </span>

              </div>

            </div>


            <div className="col-md-4">

              <div className="certificate-card">

                <i className="bi bi-trophy-fill"></i>

                <h3>
                  Project Achievement
                </h3>

                <p>
                  Developed multiple practical projects
                  while learning web development.
                </p>

                <span>
                  Achievement
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DAY 10 - RESUME
      ===================================================== */}

      <section
        id="resume"
        className="section resume-section"
      >

        <div className="container">

          <div className="resume-box">

            <div>

              <p className="section-small">
                MY RESUME
              </p>

              <h2>
                Ready to Explore My <span>Resume?</span>
              </h2>

              <p>
                Download my resume to know more about my
                education, skills, projects and career goals.
              </p>

            </div>

            <div>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
              >
                <i className="bi bi-eye me-2"></i>
                Preview Resume
              </a>

              <a
                href="/resume.pdf"
                download
                className="secondary-btn"
              >
                <i className="bi bi-download me-2"></i>
                Download
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DAY 11 - TESTIMONIALS
      ===================================================== */}

      <section
        id="testimonials"
        className="section testimonials-section"
      >

        <div className="container">

          <div className="section-heading">

            <p className="section-small">
              TESTIMONIALS
            </p>

            <h2>
              What People <span>Say</span>
            </h2>

          </div>


          <div className="row g-4">

            <div className="col-md-4">

              <div className="testimonial-card">

                <div className="quote">
                  "
                </div>

                <p>
                  Shraddha is a quick learner who always tries
                  to improve her technical skills through
                  practical projects.
                </p>

                <h4>
                  Project Feedback
                </h4>

                <span>
                  Learning Journey
                </span>

              </div>

            </div>


            <div className="col-md-4">

              <div className="testimonial-card">

                <div className="quote">
                  "
                </div>

                <p>
                  Her dedication towards learning web
                  development and building projects is
                  impressive.
                </p>

                <h4>
                  Team Feedback
                </h4>

                <span>
                  Collaboration
                </span>

              </div>

            </div>


            <div className="col-md-4">

              <div className="testimonial-card">

                <div className="quote">
                  "
                </div>

                <p>
                  A motivated student who enjoys exploring
                  new technologies and improving problem-solving
                  skills.
                </p>

                <h4>
                  Learning Feedback
                </h4>

                <span>
                  Development
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DAY 12 - GITHUB
      ===================================================== */}

      <section
        id="github"
        className="section github-section"
      >

        <div className="container">

          <div className="github-box">

            <div className="github-icon">

              <i className="bi bi-github"></i>

            </div>

            <div>

              <p className="section-small">
                GITHUB
              </p>

              <h2>
                Coding & <span>GitHub Activity</span>
              </h2>

              <p>
                Explore my repositories, coding projects and
                development journey on GitHub.
              </p>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
              >
                <i className="bi bi-github me-2"></i>
                Visit GitHub
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DAY 13 - CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="section contact-section"
      >

        <div className="container">

          <div className="section-heading">

            <p className="section-small">
              CONTACT ME
            </p>

            <h2>
              Let's <span>Connect</span>
            </h2>

            <p>
              Have a project, internship opportunity or
              question? Feel free to contact me.
            </p>

          </div>


          <div className="row g-5">

            <div className="col-lg-5">

              <div className="contact-info">

                <div className="contact-item">

                  <div className="contact-icon">
                    <i className="bi bi-envelope-fill"></i>
                  </div>

                  <div>
                    <h4>Email</h4>
                    <p>
                      shraddhaj492@gmail.com
                    </p>
                  </div>

                </div>


                <div className="contact-item">

                  <div className="contact-icon">
                    <i className="bi bi-telephone-fill"></i>
                  </div>

                  <div>
                    <h4>Phone</h4>
                    <p>
                      8792505577
                    </p>
                  </div>

                </div>


                <div className="contact-item">

                  <div className="contact-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>

                  <div>
                    <h4>Location</h4>
                    <p>
                      Kalaburagi, Karnataka, India
                    </p>
                  </div>

                </div>


                <div className="contact-item">

                  <div className="contact-icon">
                    <i className="bi bi-linkedin"></i>
                  </div>

                  <div>
                    <h4>LinkedIn</h4>
                    <p>
                      Professional Profile
                    </p>
                  </div>

                </div>

              </div>

            </div>


            <div className="col-lg-7">

              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Your message has been submitted.");
                }}
              >

                <div className="row g-3">

                  <div className="col-md-6">

                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                    />

                  </div>

                  <div className="col-md-6">

                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                    />

                  </div>

                  <div className="col-12">

                    <input
                      type="text"
                      placeholder="Subject"
                      required
                    />

                  </div>

                  <div className="col-12">

                    <textarea
                      rows="6"
                      placeholder="Your Message"
                      required
                    ></textarea>

                  </div>

                  <div className="col-12">

                    <button
                      type="submit"
                      className="primary-btn border-0"
                    >
                      <i className="bi bi-send-fill me-2"></i>
                      Send Message
                    </button>

                  </div>

                </div>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DAY 14 - LOCATION
      ===================================================== */}

      <section
        id="location"
        className="section location-section"
      >

        <div className="container">

          <div className="section-heading">

            <p className="section-small">
              LOCATION
            </p>

            <h2>
              Where I'm <span>Based</span>
            </h2>

          </div>


          <div className="location-box">

            <div className="location-content">

              <i className="bi bi-geo-alt-fill"></i>

              <h3>
                Kalaburagi, Karnataka
              </h3>

              <p>
                India
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Kalaburagi%20Karnataka"
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
              >
                <i className="bi bi-map me-2"></i>
                Open Google Maps
              </a>

            </div>


            <div className="map-placeholder">

              <i className="bi bi-map-fill"></i>

              <h4>
                Google Maps
              </h4>

              <p>
                Click the button to view location
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DAY 15 - FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="container">

          <div className="row g-4">

            <div className="col-lg-4">

              <a
                href="#home"
                className="footer-logo"
              >
                Shraddha<span>.</span>
              </a>

              <p>
                BCA Student & Aspiring Web Developer passionate
                about building modern web experiences.
              </p>

            </div>


            <div className="col-6 col-lg-2">

              <h4>
                Quick Links
              </h4>

              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>

            </div>


            <div className="col-6 col-lg-2">

              <h4>
                Services
              </h4>

              <a href="#services">
                Web Development
              </a>

              <a href="#services">
                React Development
              </a>

              <a href="#services">
                Python
              </a>

              <a href="#services">
                Dashboard
              </a>

            </div>


            <div className="col-lg-4">

              <h4>
                Connect With Me
              </h4>

              <div className="footer-social">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>

                <a href="mailto:shraddhaj492@gmail.com">
                  <i className="bi bi-envelope-fill"></i>
                </a>

              </div>

              <p className="footer-email">
                shraddhaj492@gmail.com
              </p>

            </div>

          </div>


          <div className="footer-bottom">

            <p>
              © 2026 Shraddha Jadhav. All Rights Reserved.
            </p>

            <div>
              <span>Privacy</span>
              <span>Terms</span>
            </div>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;