function Home() {
  return (
    <main className="home">
      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <h1>
            Transforming Spaces
            <br />
            Into Extraordinary
            <br />
            Experiences
          </h1>

          <p>
            Award-winning interior design studio crafting timeless,
            <br />
            sophisticated environments for discerning clients across
            <br />
            residential, commercial, and hospitality sectors.
          </p>

          <div className="categories">
            <button className="category active">
              Residential <span>(18)</span>
            </button>

            <button className="category">
              Commercial <span>(12)</span>
            </button>

            <button className="category">
              Hospitality <span>(9)</span>
            </button>

            <button className="category">
              Retail <span>(8)</span>
            </button>
          </div>

          <div className="hero-buttons">
            <button className="portfolio-button">
              View Portfolio →
            </button>

            <button className="consult-button">
              Book Consultation
            </button>
          </div>

        </div>

      </section>
    </main>
  );
}

export default Home;