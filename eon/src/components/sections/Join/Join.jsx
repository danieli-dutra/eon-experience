import "./Join.css";

function Join() {
  return (
    <section id="join">
      <div className="container">
        <h2>Join EON</h2>

        <form>
          <input type="text" placeholder="Your name" />

          <input type="email" placeholder="Your email" />

          <textarea
            placeholder="Your message"
            rows="5"
          ></textarea>

          <button type="submit">
            Join
          </button>
        </form>
      </div>
    </section>
  );
}

export default Join;