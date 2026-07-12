import { useState } from "react";

import "./Join.css";

/* ======================================================
   FORM FIELDS
====================================================== */

const FORM_FIELDS = Object.freeze({

  NAME: "name",

  EMAIL: "email"

});

/* ======================================================
   COPY
====================================================== */

const COPY = Object.freeze({

  TITLE: [
    "WE DON'T BUILD TRENDS.",
    "WE BUILD WHAT COMES NEXT."
  ],

  SUBTITLE: "The story continues with you.",

  BUTTON: "I'M READY"

});

function Join() {

  const [formData, setFormData] = useState({

    [FORM_FIELDS.NAME]: "",

    [FORM_FIELDS.EMAIL]: ""

  });

  /* ======================================================
     HANDLE INPUT CHANGE
  ====================================================== */

  function handleChange(event) {

    const { name, value } = event.target;

    setFormData((previous) => ({

      ...previous,

      [name]: value

    }));

  }

  /* ======================================================
     TEMP SUBMIT
  ====================================================== */

  function handleSubmit(event) {

    event.preventDefault();

    console.log(formData);

  }

  return (

    <section
      id="join"
      className="join section"
    >

      <div className="container">

        <div className="join__content">

          {/* ======================================================
              HEADER
          ====================================================== */}

          <header className="join__header">

            <h2 className="join__title">

              <span className="join__title-line--single">
                WE DON'T BUILD TRENDS.
              </span>

              <span className="join__title-line join__title-line--spaced">
                WE BUILD WHAT
              </span>

              <span className="join__title-line">
                <span className="join__title-accent">
                  COMES NEXT.
              </span>
            </span>

            </h2>

            <p className="join__subtitle">

              {COPY.SUBTITLE}

            </p>

          </header>

          {/* ======================================================
              FORM
          ====================================================== */}

          <form
            className="join__form"
            onSubmit={handleSubmit}
          >

            {/* ==============================================
                NAME
            ============================================== */}

            <div className="join__field">

              <label
                htmlFor={FORM_FIELDS.NAME}
                className="join__label"
              >
                Name
              </label>

              <input
                id={FORM_FIELDS.NAME}
                name={FORM_FIELDS.NAME}
                type="text"
                className="join__input"
                autoComplete="name"
                value={formData[FORM_FIELDS.NAME]}
                onChange={handleChange}
                required
              />

            </div>

            {/* ==============================================
                EMAIL
            ============================================== */}

            <div className="join__field">

              <label
                htmlFor={FORM_FIELDS.EMAIL}
                className="join__label"
              >
                Email
              </label>

              <input
                id={FORM_FIELDS.EMAIL}
                name={FORM_FIELDS.EMAIL}
                type="email"
                className="join__input"
                autoComplete="email"
                value={formData[FORM_FIELDS.EMAIL]}
                onChange={handleChange}
                required
              />

            </div>

            {/* ==============================================
                CTA
            ============================================== */}

            <button
              type="submit"
              className="join__button"
            >
              {COPY.BUTTON}
            </button>

          </form>

        </div>

      </div>

    </section>

  );

}

export default Join;