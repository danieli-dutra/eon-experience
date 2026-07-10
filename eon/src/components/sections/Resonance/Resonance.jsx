import "./Resonance.css";

import logo from "../../../assets/images/logo/eon-logo-light.svg";

function Resonance() {

  return (

    <section
      id="question"
      className="question section"
    >

      <div className="container">

        {/* ======================================================
            CONTENT
        ====================================================== */}

        <div className="question__content">

          {/* ======================================================
              QUESTION
          ====================================================== */}

          <div className="question__text">

            <p
              id="question-see"
              className="question__line"
            >
              DO YOU SEE
            </p>

            <p
              id="question-yourself"
              className="question__line"
            >
              YOURSELF
            </p>

            <p
              id="question-here"
              className="question__line question__line--accent"
            >
              HERE?
            </p>

          </div>

          {/* ======================================================
              LOGO
          ====================================================== */}

          <div className="question__reveal">

            <img
              src={logo}
              alt="EON"
            />

          </div>

        </div>

      </div>

    </section>

  );

}

export default Resonance;