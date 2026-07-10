/* ======================================================
   NARRATIVE ENGINE
====================================================== */

export function createNarrativeEngine({ timeline, onEvent }) {

  const timers = [];

  function start() {

    timeline.forEach((event) => {

      const timer = setTimeout(() => {
        onEvent(event);
      }, event.time);

      timers.push(timer);

    });

  }

  function stop() {

    timers.forEach(clearTimeout);

  }

  return {
    start,
    stop
  };

}

/* ======================================================
   EVENT TYPES
====================================================== */

export const NarrativeEvent = {

  SHOW: "SHOW",
  DIM: "DIM",
  HIDE: "HIDE",

  QUESTION: "QUESTION",

  LOGO: "LOGO"

};