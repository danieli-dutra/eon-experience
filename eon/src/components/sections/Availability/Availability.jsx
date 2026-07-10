import { useEffect, useRef, useState } from "react";
import "./Availability.css";

import {
  createNarrativeEngine,
  NarrativeState
} from "../../../lib/narrativeEngine";

/* ======================================================
   STATEMENTS
====================================================== */

const statements = [
  {
    id: "statement-why",
    text: "People who ask why before how."
  },
  {
    id: "statement-builders",
    text: "Builders who value intention over impulse."
  },
  {
    id: "statement-impact",
    text: "People who care more about lasting impact than quick recognition."
  },
  {
    id: "statement-technology",
    text: "Those who see technology as a tool, not a destination."
  },
  {
    id: "statement-curiosity",
    text: "Curious minds willing to challenge the obvious."
  }
];

/* ======================================================
   NARRATIVE TIMELINE
====================================================== */

const TIMELINE = [

  {
    at: 1500,
    id: "statement-why",
    state: NarrativeState.ACTIVE
  },

  {
    at: 5600,
    id: "statement-builders",
    state: NarrativeState.ACTIVE
  },

  {
    at: 6500,
    id: "statement-why",
    state: NarrativeState.PAST
  },

  {
    at: 9800,
    id: "statement-impact",
    state: NarrativeState.ACTIVE
  },

  {
    at: 10700,
    id: "statement-builders",
    state: NarrativeState.PAST
  },

  {
    at: 14500,
    id: "statement-technology",
    state: NarrativeState.ACTIVE
  },

  {
    at: 15400,
    id: "statement-impact",
    state: NarrativeState.PAST
  },

  {
    at: 19000,
    id: "statement-curiosity",
    state: NarrativeState.ACTIVE
  },

  {
    at: 19900,
    id: "statement-technology",
    state: NarrativeState.PAST
  }

];

function Availability() {

  const headerRef = useRef(null);
  const engine = useRef(null);

  const [started, setStarted] = useState(false);

  const [narrativeState, setNarrativeState] = useState(() =>
    Object.fromEntries(
      statements.map((statement) => [
        statement.id,
        {
          state: NarrativeState.HIDDEN
        }
      ])
    )
  );

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
     NARRATIVE ENGINE
  ====================================================== */

  useEffect(() => {

    if (!started) return;

    if (!engine.current) {
      engine.current = createNarrativeEngine(TIMELINE);
    }

    engine.current.play((event) => {

      setNarrativeState((previous) => ({

        ...previous,

        [event.id]: {

          ...previous[event.id],

          state: event.state

        }

      }));

    });

    return () => {

      engine.current.stop();

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

          {statements.map((statement) => {

            const current = narrativeState[statement.id];

            let stateClass = "availability__statement--hidden";

            switch (current.state) {

              case NarrativeState.ACTIVE:
                stateClass = "availability__statement--active";
                break;

              case NarrativeState.PAST:
                stateClass = "availability__statement--past";
                break;

              default:
                stateClass = "availability__statement--hidden";

            }

            return (

              <p
                key={statement.id}
                className={`availability__statement ${stateClass}`}
              >
                {statement.text}
              </p>

            );

          })}

        </div>

      </div>

    </section>

  );

}

export default Availability;