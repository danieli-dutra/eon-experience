import "./Header.css";
import Button from "../../ui/Button/Button";
import logo from "../../../assets/images/logo/eon-logo-dark.svg";

function Header() {
  return (
    <header className="header">
      <div className="container header__container">

        <a href="#hero" className="header__logo">
          <img src={logo} alt="EON" />
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