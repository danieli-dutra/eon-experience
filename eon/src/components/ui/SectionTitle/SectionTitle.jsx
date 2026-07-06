import "./SectionTitle.css";

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="section-title">
      {eyebrow && (
        <span className="section-title__eyebrow">
          {eyebrow}
        </span>
      )}

      <h2 className="section-title__heading">
        {title}
      </h2>

      {subtitle && (
        <p className="section-title__subtitle">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;