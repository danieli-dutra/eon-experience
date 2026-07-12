import { useEffect, useRef, useState } from "react";

import "./Resonance.css";

import ring from "../../../assets/images/logo/eon-ring.svg";
import logo from "../../../assets/images/logo/eon-logo-light.svg";

import {
  createNarrativeEngine,
  NarrativeState
} from "../../../lib/narrativeEngine";

/* ======================================================
   NARRATIVE ELEMENTS
====================================================== */

const NarrativeElements = Object.freeze({

  QUESTION_SEE: "question-see",

  QUESTION_YOURSELF: "question-yourself",

  QUESTION_HERE: "question-here",

  PRELUDE: "prelude",

  RING: "ring",

  LOGO: "logo",

  RESOLUTION: "resolution"

});

/* ======================================================
   QUESTION
====================================================== */

const QUESTION = [

  {
    id: NarrativeElements.QUESTION_SEE,
    text: "DO YOU SEE"
  },

  {
    id: NarrativeElements.QUESTION_YOURSELF,
    text: "YOURSELF"
  },

  {
    id: NarrativeElements.QUESTION_HERE,
    text: "HERE?",
    accent: true
  }

];

/* ======================================================
   NARRATIVE TIMING
====================================================== */

const START_DELAY = 650;

const TRANSITION = 350;

const SEE_DURATION = 2600;
const YOURSELF_DURATION = 2800;
const HERE_DURATION = 3400;

const SILENCE = 700;

const PRELUDE_DURATION = 900;

const RING_REVEAL_DURATION = 1800;

const RING_HOLD_DURATION = 900;

const LOGO_DURATION = 1200;

/* ======================================================
   TIMELINE MARKERS
====================================================== */

const SEE_START = START_DELAY;
const SEE_GONE = SEE_START + SEE_DURATION;

const YOURSELF_START = SEE_GONE + TRANSITION;
const YOURSELF_GONE = YOURSELF_START + YOURSELF_DURATION;

const HERE_START = YOURSELF_GONE + TRANSITION;
const HERE_GONE = HERE_START + HERE_DURATION;

const PRELUDE_START = HERE_GONE + SILENCE;

const RING_START = PRELUDE_START + PRELUDE_DURATION;

const RING_END = RING_START + RING_REVEAL_DURATION;

const LOGO_START = RING_END + RING_HOLD_DURATION;

const RESOLUTION_START = LOGO_START + LOGO_DURATION;

/* ======================================================
   NARRATIVE TIMELINE
====================================================== */

const TIMELINE = [

  {
    at: SEE_START,
    id: NarrativeElements.QUESTION_SEE,
    state: NarrativeState.VISIBLE
  },

  {
    at: SEE_GONE,
    id: NarrativeElements.QUESTION_SEE,
    state: NarrativeState.GONE
  },

  {
    at: YOURSELF_START,
    id: NarrativeElements.QUESTION_YOURSELF,
    state: NarrativeState.VISIBLE
  },

  {
    at: YOURSELF_GONE,
    id: NarrativeElements.QUESTION_YOURSELF,
    state: NarrativeState.GONE
  },

  {
    at: HERE_START,
    id: NarrativeElements.QUESTION_HERE,
    state: NarrativeState.VISIBLE
  },

  {
    at: HERE_GONE,
    id: NarrativeElements.QUESTION_HERE,
    state: NarrativeState.GONE
  },

  {
    at: PRELUDE_START,
    id: NarrativeElements.PRELUDE,
    state: NarrativeState.VISIBLE
  },

  {
  at: RING_START,
  id: NarrativeElements.RING,
  state: NarrativeState.VISIBLE
},

{
  at: RING_END,
  id: NarrativeElements.RING,
  state: NarrativeState.GONE
},

{
  at: LOGO_START,
  id: NarrativeElements.LOGO,
  state: NarrativeState.VISIBLE
},

  {
    at: RESOLUTION_START,
    id: NarrativeElements.RESOLUTION,
    state: NarrativeState.VISIBLE
  }

];

function Resonance() {

  const sectionRef = useRef(null);

  const engine = useRef(null);

  const [started, setStarted] = useState(false);

  const [narrativeState, setNarrativeState] = useState(() =>
    Object.fromEntries(

      Object.values(NarrativeElements).map((id) => [

        id,

        {
          state: NarrativeState.HIDDEN
        }

      ])

    )
  );

  /* ======================================================
     START WHEN SECTION ENTERS VIEWPORT
  ====================================================== */

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting && !started) {

          setStarted(true);

        }

      },

      {

        threshold: 0.45,
        rootMargin: "-10% 0px"

      }

    );

    if (sectionRef.current) {

      observer.observe(sectionRef.current);

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
      id="resonance"
      className="resonance section"
      ref={sectionRef}
    >

      <div className="container">

        <div className="resonance__content">

          <div className="resonance__stage">

            {/* ======================================================
                QUESTION
            ====================================================== */}

            <div className="resonance__text">

              {QUESTION.map((line) => {

                const current = narrativeState[line.id];

                let stateClass = "resonance__line--hidden";

                switch (current.state) {

                  case NarrativeState.VISIBLE:
                    stateClass = "resonance__line--visible";
                    break;

                  case NarrativeState.GONE:
                    stateClass = "resonance__line--gone";
                    break;

                  default:
                    stateClass = "resonance__line--hidden";

                }

                return (

                  <p
                    key={line.id}
                    id={line.id}
                    className={`
                      resonance__line
                      ${stateClass}
                      ${line.accent ? "resonance__line--accent" : ""}
                    `}
                  >
                    {line.text}
                  </p>

                );

              })}

            </div>

            {/* ======================================================
    PRELUDE
====================================================== */}

<p
  className="resonance__prelude"
  style={{
    opacity:
      narrativeState[NarrativeElements.PRELUDE].state ===
      NarrativeState.VISIBLE
        ? 1
        : 0
  }}
>
  THIS IS...
</p>

{/* ======================================================
    REVEAL
====================================================== */}

<div
  className={`resonance__reveal ${
    narrativeState[NarrativeElements.LOGO].state ===
    NarrativeState.VISIBLE
      ? "resonance__reveal--active"
      : ""
  }`}
>

  {/* ==============================================
      RING
  ============================================== */}

  <img
  className="resonance__ring"
  src={ring}
  alt=""
  aria-hidden="true"
  style={{

    opacity:

      narrativeState[NarrativeElements.RING].state ===
      NarrativeState.VISIBLE

        ? 1

        : 0,

    transform:

      narrativeState[NarrativeElements.RING].state ===
      NarrativeState.VISIBLE

        ? "scale(1) rotate(360deg)"

        : narrativeState[NarrativeElements.RING].state ===
          NarrativeState.GONE

            ? "scale(.92) rotate(430deg)"

            : "scale(.55) rotate(0deg)"

  }}
/>

  {/* ==============================================
      LOGO
  ============================================== */}

  <div
  className={`resonance__logo-wrapper ${
    narrativeState[NarrativeElements.LOGO].state ===
    NarrativeState.VISIBLE
      ? "resonance__logo-wrapper--active"
      : ""
  }`}
>

  <img
  className={`resonance__logo ${
    narrativeState[NarrativeElements.LOGO].state ===
    NarrativeState.VISIBLE
      ? "resonance__logo--visible"
      : ""
  }`}
  src={logo}
  alt="EON"
/>

</div>

</div>

{/* ======================================================
    RESOLUTION
====================================================== */}

<p
  className="resonance__resolution"
  style={{

    opacity:
      narrativeState[NarrativeElements.RESOLUTION].state ===
      NarrativeState.VISIBLE
        ? 1
        : 0

  }}
>
  THE NEXT <span>ERA</span> HAS ALREADY BEGUN.
</p>

                      </div>

        </div>

      </div>

    </section>

  );

}

export default Resonance;