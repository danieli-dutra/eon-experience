import "./SideNavigation.css";

const sections = [
  {
    id: "hero",
    label: "INTRO",
  },
  {
    id: "manifesto",
    label: "MANIFESTO",
  },
  {
    id: "pillars",
    label: "PRINCIPLES",
  },
  {
    id: "availability",
    label: "AVAILABILITY",
  },
  {
    id: "join",
    label: "JOIN",
  },
];

function SideNavigation() {
  return (
    <nav
      className="side-navigation"
      aria-label="Navegação da página"
    >
      
      <ul className="side-navigation__list">
        {sections.map((section) => (
          <li
            key={section.id}
            className="side-navigation__item"
          >
            <a
              href={`#${section.id}`}
              className="side-navigation__link"
            >
              <span className="side-navigation__dot"></span>

              <span className="side-navigation__label">
                {section.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideNavigation;