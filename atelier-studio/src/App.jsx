import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          Shraddha<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="menu-btn">☰</button>
      </nav>

      <section id="home" className="placeholder">
        <h1>My Portfolio</h1>
        <p>Day 1 – Navbar</p>
      </section>
    </>
  );
}

export default App;