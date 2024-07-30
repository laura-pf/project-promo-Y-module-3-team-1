import "../scss/components/Header.scss";
import Title from "../images/titulo.png";
import Logo from "../images/adalablogo.png";

function Header() {
  return (
    <header className="header">
      <a
        className="header__brand"
        href="./"
        title="Haz click para volver a la página inicial"
      >
        <img className="header__subtitle" src={Title} alt="setProject" />
      </a>
      <img className="logoAdalab" src={Logo} alt="Logo Adalab" />
    </header>
  );
}

export default Header;
