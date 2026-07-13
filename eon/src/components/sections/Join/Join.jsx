import { useEffect, useRef, useState } from "react";

import "./Join.css";
import Success from "./Success";

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

/* ======================================================
   SUCCESS COPY
====================================================== */

const SUCCESS_COPY = Object.freeze({

  TITLE: "Your signal has been received.",

  INTRO: [
    "The next conversation",
    "starts sooner than you think."
  ],

  MIDDLE: "Until then...",

  VALUES: [
    "Keep questioning.",
    "Keep imagining.",
    "Stay curious."
  ],

  END: [
    "When it's time,",
    "we'll want to hear",
    "what you'll bring."
  ]

});

function Join() {

  /* ======================================================
     REFS
  ====================================================== */

  const sectionRef = useRef(null);

  /* ======================================================
     ANIMATION STATE
  ====================================================== */

  const [subtitleVisible, setSubtitleVisible] = useState(false);

  const [formVisible, setFormVisible] = useState(false);

  /* ======================================================
     FORM STATE
  ====================================================== */

  const [formData, setFormData] = useState({

    [FORM_FIELDS.NAME]: "",

    [FORM_FIELDS.EMAIL]: ""

  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);

  const [error, setError] = useState("");

  /* ======================================================
     START NARRATIVE
  ====================================================== */

  function startNarrative() {

    setTimeout(() => {

      setSubtitleVisible(true);

    }, 2300);

    setTimeout(() => {

      setFormVisible(true);

    }, 3900);

  }

  /* ======================================================
     INTERSECTION OBSERVER
  ====================================================== */

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (!entry.isIntersecting) return;

        startNarrative();

        observer.disconnect();

      },

      {

        threshold: 0.45

      }

    );

    if (sectionRef.current) {

      observer.observe(sectionRef.current);

    }

    return () => observer.disconnect();

  }, []);

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

  async function handleSubmit(event) {

  event.preventDefault();

  setIsSubmitting(true);

  setError("");

  try {

    const response = await fetch(

      "https://formspree.io/f/xqerkzjk",

      {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

          Accept: "application/json"

        },

        body: JSON.stringify({

          name: formData.name,

          email: formData.email

        })

      }

    );

    if (!response.ok) {

      throw new Error("Submission failed.");

    }

    setIsSuccess(true);

    setFormData({

      name: "",

      email: ""

    });

  } catch (error) {

    console.error(error);

    setError(

      "Something went wrong. Please try again."

    );

  } finally {

    setIsSubmitting(false);

  }

}

    return (

    <section
      id="join"
      className="join section"
      ref={sectionRef}
    >

      <div className="container">

        <div className="join__content">

                  {/* ======================================================
              HEADER
          ====================================================== */}

          <header className="join__header">

            <h2 className="join__title">

              <span className="join__title-line join__title-line--single">

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

            {!isSuccess && (

              <p
                className={`join__subtitle ${
                  subtitleVisible
                    ? "join__subtitle--visible"
                    : ""
                }`}
              >
                {COPY.SUBTITLE}

              </p>

            )}

          </header>

          {/* ======================================================
              CONTENT
          ====================================================== */}

          {isSuccess ? (

            <Success />

          ) : (

            <form
              className={`join__form ${
                formVisible
                  ? "join__form--visible"
                  : ""
              }`}
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
                disabled={isSubmitting}
              >

                {isSubmitting
                  ? "SENDING..."
                  : COPY.BUTTON}

              </button>

            </form>

          )}

        </div>

      </div>

    </section>

  );

}

export default Join;