import "./Success.css";

/* ======================================================
   COPY
====================================================== */

const SUCCESS_COPY = Object.freeze({

  TITLE: "Your signal has been received.",

  INTRO: [
    "The next conversation",
    "starts sooner than you think."
  ],

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

function Success() {

  return (

    <section className="success">

      <h3 className="success__title">

        {SUCCESS_COPY.TITLE}

      </h3>

      <div className="success__divider" />

      <div className="success__intro">

        {SUCCESS_COPY.INTRO.map((line, index) => (

          <p
            key={line}
            className={
              index === 1
                ? "success__intro-accent"
                : ""
            }
          >

            {line}

          </p>

        ))}

      </div>

      <div className="success__values">

        {SUCCESS_COPY.VALUES.map((line) => (

          <p key={line}>

            {line}

          </p>

        ))}

      </div>

      <div className="success__end">

        {SUCCESS_COPY.END.map((line) => (

          <p key={line}>

            {line}

          </p>

        ))}

      </div>

    </section>

  );

}

export default Success;