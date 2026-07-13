import "./Header.css";
import symbol from "../../../assets/images/logo/eon-symbol.svg";

function Header() {
  return (
    <header className="header">
    
        <a href="#hero" className="header__logo">
          <img src={symbol} alt="EON" />
        </a>

    </header>
  );
}

export default Header;