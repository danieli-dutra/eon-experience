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
   NARRATIVE TIMING
====================================================== */

const START_DELAY = 1500;

const FADE_DELAY = 400;

const WHY_DURATION = 4100;
const BUILDERS_DURATION = 4000;
const IMPACT_DURATION = 4200;
const TECHNOLOGY_DURATION = 4000;
const CURIOSITY_DURATION = 5500;

/* ======================================================
   TIMELINE MARKERS
====================================================== */

const WHY_START = START_DELAY;

const BUILDERS_START = WHY_START + WHY_DURATION;
const WHY_PAST = BUILDERS_START + FADE_DELAY;

const IMPACT_START = BUILDERS_START + BUILDERS_DURATION;
const BUILDERS_PAST = IMPACT_START + FADE_DELAY;

const TECHNOLOGY_START = IMPACT_START + IMPACT_DURATION;
const IMPACT_PAST = TECHNOLOGY_START + FADE_DELAY;

const CURIOSITY_START = TECHNOLOGY_START + TECHNOLOGY_DURATION;
const TECHNOLOGY_PAST = CURIOSITY_START + FADE_DELAY;

/* ======================================================
   NARRATIVE TIMELINE
====================================================== */

const TIMELINE = [

  {
    at: WHY_START,
    id: "statement-why",
    state: NarrativeState.ACTIVE
  },

  {
    at: BUILDERS_START,
    id: "statement-builders",
    state: NarrativeState.ACTIVE
  },

  {
    at: WHY_PAST,
    id: "statement-why",
    state: NarrativeState.PAST
  },

  {
    at: IMPACT_START,
    id: "statement-impact",
    state: NarrativeState.ACTIVE
  },

  {
    at: BUILDERS_PAST,
    id: "statement-builders",
    state: NarrativeState.PAST
  },

  {
    at: TECHNOLOGY_START,
    id: "statement-technology",
    state: NarrativeState.ACTIVE
  },

  {
    at: IMPACT_PAST,
    id: "statement-impact",
    state: NarrativeState.PAST
  },

  {
    at: CURIOSITY_START,
    id: "statement-curiosity",
    state: NarrativeState.ACTIVE
  },

  {
    at: TECHNOLOGY_PAST,
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