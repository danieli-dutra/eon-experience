import { useEffect, useRef, useState } from "react";
import { createScrollEngine } from "../../../lib/scrollEngine";
import "./SideNavigation.css";

const sections = [
  { id: "hero", label: "INTRO" },
  { id: "manifesto", label: "MANIFESTO" },
  { id: "principles", label: "PRINCIPLES" },
  { id: "availability", label: "AVAILABILITY" },
  { id: "resonance", label: "RESONANCE" },
  { id: "join", label: "JOIN" },
];

export default function SideNavigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const indicatorRef = useRef(null);
  useEffect(() => {
    const engine = createScrollEngine(sections.map(({ id }) => document.getElementById(id)).filter(Boolean));
    engine.observe(setActiveSection);
    return () => engine.disconnect();
  }, []);
  useEffect(() => {
    const nav = navRef.current;
    const indicator = indicatorRef.current;
    let animation;
    function positionIndicator() {
      const dot = nav.querySelector('.side-navigation__link--active .side-navigation__dot');
      if (!dot || !dot.getClientRects().length) return;
      const navRect = nav.getBoundingClientRect();
      const dotRect = dot.getBoundingClientRect();
      const next = { left: `${dotRect.left - navRect.left}px`, top: `${dotRect.top - navRect.top}px` };
      animation?.cancel();
      if (indicator.style.top && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        animation = indicator.animate([{left:indicator.style.left,top:indicator.style.top}, next], {duration:450,easing:'ease',fill:'none'});
      }
      Object.assign(indicator.style, next);
    }
    positionIndicator();
    const resize = new ResizeObserver(positionIndicator);
    resize.observe(nav);
    return () => { resize.disconnect(); animation?.cancel(); };
  }, [activeSection, open]);
  useEffect(() => {
    function closeOnOutside(event) {
      if (!navRef.current?.contains(event.target)) setOpen(false);
    }
    function closeOnEscape(event) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);
  return (
    <nav ref={navRef} className={`side-navigation ${open ? "side-navigation--open" : ""}`} aria-label="Page navigation"
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
      <button ref={toggleRef} className="side-navigation__toggle" type="button" aria-expanded={open}
        aria-controls="section-navigation" onClick={() => setOpen(!open)}>
        {open ? "CLOSE" : "EXPLORE"} <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <ul id="section-navigation" className="side-navigation__list">
        {sections.map(({ id, label }) => (
          <li key={id} className="side-navigation__item">
            <a href={`#${id}`} aria-label={label} aria-current={activeSection === id ? "location" : undefined}
              className={`side-navigation__link ${activeSection === id ? "side-navigation__link--active" : ""}`}
              onClick={() => { setOpen(false); if (window.matchMedia("(max-width: 900px)").matches) toggleRef.current?.focus(); }}>
              <span className="side-navigation__dot" aria-hidden="true" />
              <span className="side-navigation__label">{label}</span>
            </a>
          </li>
        ))}
      </ul>
      <span ref={indicatorRef} className="side-navigation__indicator" aria-hidden="true" />
    </nav>
  );
}
