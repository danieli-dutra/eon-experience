import { useEffect, useRef, useState } from "react";
import "./Availability.css";

const statements = [
  "People who ask why before how.",
  "Builders who value intention over impulse.",
  "People who care more about lasting impact than quick recognition.",
  "Those who see technology as a tool, not a destination.",
  "Curious minds willing to challenge the obvious."
];

/* ======================================================
   NARRATIVE TIMELINE (ms)
====================================================== */

const TIMELINE = [
  1500,  // Statement 1
  5700,  // Statement 2
  9300,  // Statement 3
  13800, // Statement 4
  17600  // Statement 5
];

function Availability() {

  const headerRef = useRef(null);

  const [step, setStep] = useState(-1);
  const [started, setStarted] = useState(false);

  /* ======================================================
     START WHEN HEADER ENTERS VIEWPORT
  ====================================================== */

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting && !started) {
          setStarted(true);
        }

      },
      {
        threshold: 0.5,
        rootMargin: "-15% 0px"
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();

  }, [started]);

  /* ======================================================
     TIMELINE
  ====================================================== */

  useEffect(() => {

    if (!started) return;

    const timers = [];

    TIMELINE.forEach((time, index) => {

      const timer = setTimeout(() => {
        setStep(index);
      }, time);

      timers.push(timer);

    });

    return () => {
      timers.forEach(clearTimeout);
    };

  }, [started]);

  return (
    <section
      id="availability"
      className="availability section"
    >
      <div className="container">

        {/* ======================================================
            HEADER
        ====================================================== */}

        <div
          className="availability__header"
          ref={headerRef}
        >
          <div className="availability__eyebrow-wrapper">

            <span className="availability__eyebrow-line"></span>

            <span className="availability__eyebrow">
              WHO WE BUILD WITH
            </span>

            <span className="availability__eyebrow-line"></span>

          </div>
        </div>

        {/* ======================================================
            STATEMENTS
        ====================================================== */}

        <div className="availability__content">

          {statements.map((statement, index) => {

            let stateClass = "availability__statement--hidden";

            if (index === step) {
              stateClass = "availability__statement--active";
            } else if (index < step) {
              stateClass = "availability__statement--past";
            }

            return (
              <p
                key={statement}
                className={`availability__statement ${stateClass}`}
              >
                {statement}
              </p>
            );

          })}

        </div>

      </div>
    </section>
  );
}

export default Availability;