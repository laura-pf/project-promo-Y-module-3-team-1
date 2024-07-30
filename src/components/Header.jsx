import "../scss/components/Header.scss";
import Title from "../images/titulo.png";

function Header() {
  return (
    <header className="header">
      <a
        className="header__brand"
        href="./"
        title="Haz click para volver a la página inicial"
      >
        {/* <img className="header__companyLogo" src="./images/laptop-code-solid.svg" alt="Logo proyectos molones"> */}
        {/* <h1 className="header__title">Proyectos molones</h1> */}
        <img className="header__subtitle" src={Title} alt="setProject" />
      </a>
      {/* <img className="logoSponsor" src="./images/adalab.png" alt="Logo Adalab"> */}
    </header>
  );
}

export default Header;
