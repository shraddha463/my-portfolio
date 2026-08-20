import "./App.css";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Vite",
    "Python",
    "Node.js",
    "Express.js",
    "MySQL",
    "Git & GitHub",
    "Power BI",
    "REST APIs",
  ];

  const projects = [
    {
      number: "01",
      icon: "🛍️",
      title: "E-Commerce Website",
      description:
        "A responsive e-commerce website created using React.js with modern UI and product sections.",
      tech: "React.js • JavaScript • CSS",
    },
    {
      number: "02",
      icon: "💼",
      title: "My Portfolio",
      description:
        "A personal portfolio website showcasing my skills, education, projects and frontend development journey.",
      tech: "React.js • Vite • CSS",
    },
    {
      number: "03",
      icon: "💻",
      title: "Online Job Portal",
      description:
        "An online job portal project designed to connect job seekers with available job opportunities.",
      tech: "Python • MySQL • XAMPP",
    },
  ];

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <a href="#home" className="logo">
          Shraddha<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="/resume.pdf"
          download="Shraddha-Jadhav-Resume.pdf"
          className="resume-btn"
        >
          ⬇ Resume
        </a>

      </nav>

      {/* ================= HOME ================= */}

      <section id="home" className="hero">

        <div className="hero-container">

          <div className="hero-content">

            <p className="hello">HELLO, I'M</p>

            <h1>
              Shraddha
              <span> Jadhav</span>
            </h1>

            <h2>Frontend Developer</h2>

            <p className="hero-description">
              I create modern, responsive and user-friendly websites using
              React.js, JavaScript, HTML and CSS.
            </p>

            <div className="hero-buttons">

              <a href="#projects" className="primary-btn">
                View My Work
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                📄 View Resume
              </a>

              <a
                href="/resume.pdf"
                download="Shraddha-Jadhav-Resume.pdf"
                className="download-btn"
              >
                ⬇ Download Resume
              </a>

            </div>

            <div className="hero-tags">
              <span>💻 Frontend Developer</span>
              <span>⚡ React.js</span>
              <span>🎨 UI Design</span>
            </div>

          </div>

          {/* PROFILE IMAGE */}

          <div className="profile-card">

            <div className="profile-image-wrapper">

              <img
                src="/profile.jpeg"
                alt="Shraddha Jadhav"
                className="profile-image"
              />

            </div>

            <h3>Shraddha Jadhav</h3>

            <p>Frontend Developer</p>

            <div className="profile-line"></div>

            <div className="profile-skills">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="section">

        <div className="section-title">

          <p>GET TO KNOW ME</p>

          <h2>
            About <span>Me</span>
          </h2>

        </div>

        <div className="about-container">

          <div className="about-card">

            <div className="about-photo">

              <img
                src="/profile.jpeg"
                alt="Shraddha Jadhav"
              />

            </div>

            <h3>Frontend Developer</h3>

            <p>
              Passionate about creating modern and responsive websites.
            </p>

          </div>

          <div className="about-content">

            <h3>Hello! I'm Shraddha 👋</h3>

            <p>
              I am a BCA student and an aspiring Frontend Developer who loves
              creating beautiful and interactive websites.
            </p>

            <p>
              I have experience working with HTML, CSS, JavaScript, React.js
              and other modern web technologies.
            </p>

            <p>
              I enjoy converting ideas into simple, attractive and
              user-friendly web experiences.
            </p>

            <div className="about-details">

              <div>
                <strong>Name</strong>
                <span>Shraddha Jadhav</span>
              </div>

              <div>
                <strong>Role</strong>
                <span>Frontend Developer</span>
              </div>

              <div>
                <strong>Education</strong>
                <span>BCA</span>
              </div>

              <div>
                <strong>Focus</strong>
                <span>Web Development</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="section blue-section">

        <div className="section-title">

          <p>MY TECHNOLOGIES</p>

          <h2>
            Skills & <span>Technologies</span>
          </h2>

        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (

            <div className="skill-card" key={skill}>

              <div className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{skill}</h3>

              <div className="skill-line">
                <span></span>
              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="section">

        <div className="section-title">

          <p>MY JOURNEY</p>

          <h2>
            My <span>Experience</span>
          </h2>

        </div>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-card">

              <span className="date">2026</span>

              <h3>Frontend Development Journey</h3>

              <h4>Personal Projects & Learning</h4>

              <p>
                Building responsive websites and React applications while
                improving my knowledge of JavaScript, UI design and modern
                frontend development.
              </p>

            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-card">

              <span className="date">2025 - 2026</span>

              <h3>Web Development Projects</h3>

              <h4>Academic & Personal Projects</h4>

              <p>
                Worked on different web development projects using HTML, CSS,
                JavaScript, React.js, Python and MySQL.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= EDUCATION ================= */}

      <section id="education" className="section blue-section">

        <div className="section-title">

          <p>MY QUALIFICATION</p>

          <h2>
            My <span>Education</span>
          </h2>

        </div>

        <div className="education-card">

          <div className="education-icon">
            🎓
          </div>

          <div>

            <span className="date">
              2023 - 2026
            </span>

            <h3>Bachelor of Computer Applications</h3>

            <h4>BCA</h4>

            <p>
              Studying computer applications with a focus on programming,
              database management, web development and software technologies.
            </p>

            <div className="education-tags">

              <span>Programming</span>
              <span>Web Development</span>
              <span>Database</span>
              <span>Software Development</span>

            </div>

          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section">

        <div className="section-title">

          <p>MY RECENT WORK</p>

          <h2>
            Featured <span>Projects</span>
          </h2>

        </div>

        <div className="projects-grid">

          {projects.map((project) => (

            <div className="project-card" key={project.title}>

              <div className="project-top">

                <span>
                  {project.number}
                </span>

                <span className="project-arrow">
                  ↗
                </span>

              </div>

              <div className="project-icon">
                {project.icon}
              </div>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech}
              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= RESUME ================= */}

      <section id="resume" className="section blue-section">

        <div className="section-title">

          <p>MY RESUME</p>

          <h2>
            My <span>Resume</span>
          </h2>

        </div>

        <div className="resume-container">

          <div className="resume-box">

            <div className="resume-icon">
              📄
            </div>

            <h3>Shraddha Jadhav - Resume</h3>

            <p>
              View my complete resume or download it for future reference.
            </p>

            <div className="resume-buttons">

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
              >
                👁 View Resume
              </a>

              <a
                href="/resume.pdf"
                download="Shraddha-Jadhav-Resume.pdf"
                className="download-btn"
              >
                ⬇ Download Resume
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="section contact-section">

        <div className="section-title">

          <p>GET IN TOUCH</p>

          <h2>
            Let's <span>Connect</span>
          </h2>

        </div>

        <div className="contact-container">

          <div className="contact-content">

            <h3>Have a project in mind?</h3>

            <p>
              I'm always interested in learning new things, building projects
              and connecting with people. Feel free to contact me.
            </p>

            <div className="contact-details">

              <div className="contact-item">

                <div className="contact-icon">
                  📧
                </div>

                <div>
                  <small>Email</small>
                  <p>shraddhajadhav@example.com</p>
                </div>

              </div>

              <div className="contact-item">

                <div className="contact-icon">
                  📍
                </div>

                <div>
                  <small>Location</small>
                  <p>Gulbarga, Karnataka</p>
                </div>

              </div>

              <div className="contact-item">

                <div className="contact-icon">
                  💻
                </div>

                <div>
                  <small>Profession</small>
                  <p>Frontend Developer</p>
                </div>

              </div>

            </div>

          </div>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Your message has been received.");
            }}
          >

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button
              type="submit"
              className="primary-btn"
            >
              Send Message →
            </button>

          </form>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-logo">
          Shraddha<span>.</span>
        </div>

        <p>
          Designed & Built with ❤️ by Shraddha Jadhav
        </p>

        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="copyright">
          © 2026 Shraddha Jadhav. All Rights Reserved.
        </div>

      </footer>

    </div>
  );
}

export default App;