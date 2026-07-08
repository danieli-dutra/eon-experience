import "./Hero.css";

import Button from "../../ui/Button/Button";

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

          <Button>
            Start the Journey
          </Button>

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
        <span>Scroll to discover</span>

        <div className="hero__scroll-line"></div>
      </div>

    </section>
  );
}

export default Hero;