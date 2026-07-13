import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">

      <div className="container hero__container">

        <div className="hero__content">

          <p className="hero__eyebrow">
            A movement for what comes next.
          </p>

          <h1 className="hero__title">
            <span>Build</span>
            <span>Beyond.</span>
          </h1>

          <p className="hero__description">
            Ideas shape the future long before
            people realize it.
          </p>

        </div>

        <div
          className="hero__visual"
          aria-hidden="true"
        ></div>

      </div>

      <div
        className="hero__scroll"
        aria-hidden="true"
      >

        <span className="hero__scroll-text">

          SCROLL

        </span>

        <div className="hero__scroll-indicator">

          <span className="hero__scroll-dot"></span>

        </div>

      </div>

    </section>
  );
}

export default Hero;