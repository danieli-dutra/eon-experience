/* ======================================================
   NARRATIVE STATES
====================================================== */

export const NarrativeState = Object.freeze({

  HIDDEN: "hidden",

  ACTIVE: "active",

  PAST: "past"

});

/* ======================================================
   NARRATIVE ENGINE
====================================================== */

export function createNarrativeEngine(timeline = []) {

  let timers = [];

  function play(callback) {

    stop();

    timeline.forEach((event) => {

      const timer = setTimeout(() => {

        callback(event);

      }, event.at);

      timers.push(timer);

    });

  }

  function stop() {

    timers.forEach(clearTimeout);

    timers = [];

  }

  return {

    play,
    stop

  };

}