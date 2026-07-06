import "./Header.css";
import Button from "../../ui/Button/Button";

function Header() {
  return (
    <header className="header">
      <div className="container header__container">

        <a href="#hero" className="header__logo">
          EON
            </a>

        <nav className="header__nav">
          <a href="#manifesto">Manifesto</a>
          <a href="#pillars">Principles</a>
          <a href="#join">Join</a>
        </nav>

        <Button href="#join">
          Join the Era
        </Button>

      </div>
    </header>
  );
}

export default Header;