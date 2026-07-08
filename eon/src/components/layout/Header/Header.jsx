import "./Header.css";
import symbol from "../../../assets/images/logo/eon-symbol.svg";

function Header() {
  return (
    <header className="header">
    
        <a href="#hero" className="header__logo">
          <img src={symbol} alt="EON" />
        </a>

        <button className="header__menu" aria-label="Abrir navegação">


          <span></span>
          <span></span>
          <span></span>
        </button>

    </header>
  );
}

export default Header;